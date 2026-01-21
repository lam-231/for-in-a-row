import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearHistory } from '../store/resultsSlice';
import styles from './StartPage.module.css';

const ScoreboardPage = () => {
    const results = useSelector((state) => state.results);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={styles.page} style={{ justifyContent: 'flex-start', paddingTop: '50px' }}>
            <h2>Таблиця результатів 🏆</h2>

            {results.length === 0 ? (
                <p>Історія ігор порожня. Зіграйте перший матч!</p>
            ) : (
                <div style={{ width: '80%', maxWidth: '600px', margin: '20px 0' }}>
                    <table border="1" style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', color: 'black' }}>
                        <thead>
                        <tr style={{ backgroundColor: '#eee' }}>
                            <th style={{ padding: '10px' }}>Дата</th>
                            <th style={{ padding: '10px' }}>Переможець</th>
                            <th style={{ padding: '10px' }}>Гравці</th>
                        </tr>
                        </thead>
                        <tbody>
                        {results.map((game) => (
                            <tr key={game.id}>
                                <td style={{ padding: '8px', textAlign: 'center' }}>{game.date}</td>
                                <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{game.winner}</td>
                                <td style={{ padding: '8px', textAlign: 'center' }}>{game.player1} vs {game.player2}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className={styles.controls}>
                <button onClick={() => navigate('/')}>На головну</button>
                {results.length > 0 && (
                    <button onClick={() => dispatch(clearHistory())} style={{ backgroundColor: '#d9534f' }}>
                        Очистити історію
                    </button>
                )}
            </div>
        </div>
    );
};

export default ScoreboardPage;
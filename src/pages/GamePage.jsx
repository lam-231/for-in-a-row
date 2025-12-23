import { useSettings } from '../context/SettingsContext';
import { useGame } from "../hooks/useGame.js";
import GameBoard from '../components/GameBoard';
import Modal from '../components/Modal';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './GamePage.module.css';

const GamePage = () => {
    const { settings } = useSettings();

    const { board, currentPlayer, winner, isGameOver, makeMove, resetGame } = useGame(settings.rows, settings.cols);

    const currentPlayerName = currentPlayer === 'red' ? settings.player1Name : settings.player2Name;

    const { userId } = useParams();
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/');
    };

    return (
        <div className={styles.page}>
            <small style={{color: '#666'}}>Game Session: {userId}</small>
            <div className={styles.gameInfo}>
                Хід гравця: <span style={{ color: currentPlayer }}>
          {currentPlayerName}
        </span>
            </div>

            <GameBoard board={board} onColumnClick={makeMove} />

            <div className={styles.controls}>
                <button onClick={resetGame}>Грати заново</button>
                <button onClick={handleExit} style={{ backgroundColor: '#444' }}>
                    Меню
                </button>
            </div>

            <Modal isOpen={isGameOver} title="Гра завершена!">
                <div style={{ textAlign: 'center' }}>
                    <h3>
                        {winner === 'draw'
                            ? 'Нічия!'
                            : `Переміг ${winner === 'red' ? settings.player1Name : settings.player2Name}!`} 🏆
                    </h3>

                    <div className={styles.controls} style={{ justifyContent: 'center', marginTop: '20px' }}>
                        <button onClick={resetGame} style={{ backgroundColor: '#2ea043' }}>
                            Грати знову
                        </button>
                        <button onClick={handleExit} style={{ backgroundColor: '#444' }}>
                            Вихід в меню
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;
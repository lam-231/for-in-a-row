import { useSettings } from '../context/SettingsContext';
import { useGame } from "../hooks/useGame.js";
import GameBoard from '../components/GameBoard';
import Modal from '../components/Modal';

const GamePage = ({ onEndGame }) => {
    const { settings } = useSettings();

    const { board, currentPlayer, winner, isGameOver, makeMove, resetGame } = useGame(settings.rows, settings.cols);

    const currentPlayerName = currentPlayer === 'red' ? settings.player1Name : settings.player2Name;

    return (
        <div className="page">
            <div className="game-info">
                Хід гравця: <span style={{ color: currentPlayer }}>
          {currentPlayerName}
        </span>
            </div>

            <GameBoard board={board} onColumnClick={makeMove} />

            <div className="controls">
                <button onClick={resetGame}>Грати заново</button>
                <button onClick={onEndGame} style={{ backgroundColor: '#444' }}>
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

                    <div className="controls" style={{ justifyContent: 'center', marginTop: '20px' }}>
                        <button onClick={resetGame} style={{ backgroundColor: '#2ea043' }}>
                            Грати знову
                        </button>
                        <button onClick={onEndGame} style={{ backgroundColor: '#444' }}>
                            Вихід в меню
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;
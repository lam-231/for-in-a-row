import { useGame } from "../hooks/useGame.js";
import GameBoard from '../components/GameBoard';

const GamePage = ({ onEndGame }) => {

    const { board, currentPlayer, winner, isGameOver, makeMove, resetGame } = useGame();

    return (
        <div className="page">
            <div className="game-info">
                {!isGameOver ? (
                    <div>
                        Хід гравця: <span style={{ color: currentPlayer }}>
              {currentPlayer === 'red' ? 'Червоний' : 'Жовтий'}
            </span>
                    </div>
                ) : (
                    <div style={{ color: winner === 'draw' ? 'white' : winner }}>
                        {winner === 'draw' ? 'Нічия!' : `Переміг ${winner === 'red' ? 'Червоний' : 'Жовтий'}!`}
                    </div>
                )}
            </div>

            <GameBoard board={board} onColumnClick={makeMove} />

            <div className="controls">
                <button onClick={resetGame}>Грати заново</button>
                <button
                    onClick={onEndGame}
                    style={{ backgroundColor: '#444' }}
                >
                    Завершити гру
                </button>
            </div>
        </div>
    );
};

export default GamePage;
import GameCell from './GameCell';
import styles from './GameBoard.module.css';
const GameBoard = ({ board, onColumnClick }) => {
    return (
        <div className={styles.board}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((cellValue, colIndex) => (
                        <GameCell
                            key={`${rowIndex}-${colIndex}`}
                            value={cellValue}
                            onClick={() => onColumnClick(colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
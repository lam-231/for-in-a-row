import GameCell from './GameCell';

const GameBoard = ({ board, onColumnClick }) => {
    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
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
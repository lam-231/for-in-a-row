const GamePage = ({ onEndGame }) => {
    return (
        <div className="page">
            <h2>Гра триває</h2>
            <div className="board-placeholder">
            </div>
            <button onClick={onEndGame}>Завершити</button>
        </div>
    );
};

export default GamePage;
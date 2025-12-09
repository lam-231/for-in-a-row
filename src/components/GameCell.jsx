import '../App.css';

const GameCell = ({ value, onClick }) => {
    return (
        <div className="cell" onClick={onClick}>
            <div className={`coin ${value ? value : ''}`}></div>
        </div>
    );
};

export default GameCell;
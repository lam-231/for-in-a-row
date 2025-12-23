import '../App.css';
import styles from './GameCell.module.css';

const GameCell = ({ value, onClick }) => {
    const coinClass = value ? styles[value] : '';

    return (
        <div className={styles.cell} onClick={onClick}>
            <div className={`${styles.coin} ${coinClass}`}></div>
        </div>
    );
};

export default GameCell;
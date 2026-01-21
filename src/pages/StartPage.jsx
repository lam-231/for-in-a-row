import { useState } from 'react';
import Modal from '../components/Modal';
import SettingsForm from '../components/SettingsForm';
//import { useSettings } from '../context/SettingsContext';
import { useNavigate } from 'react-router-dom';
import styles from './StartPage.module.css';
import { useSelector } from 'react-redux';

const StartPage = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    //const { settings } = useSettings();
    const settings = useSelector((state) => state.settings);
    const navigate = useNavigate();

    const handleStartGame = () => {
        const userId = `user-${Date.now()}`;
        navigate(`/game/${userId}`);
    };

    return (
        <div className={styles.page}>
            <h2>Вітаємо у грі "4 в ряд"!</h2>

            <p className={styles.players}>
                Гравці: <strong>{settings.player1Name}</strong> vs <strong>{settings.player2Name}</strong>
            </p>

            <p>Розмір поля: {settings.rows}x{settings.cols}</p>

            <div className={styles.controls}>
                <button onClick={handleStartGame} className={styles.playBtn}>Почати гру</button>

                <button onClick={() => navigate('/scoreboard')} style={{ backgroundColor: '#2c3e50' }}>
                    Таблиця лідерів
                </button>

                <button
                    onClick={() => setIsSettingsOpen(true)}
                    style={{ backgroundColor: '#555' }}
                >
                    Налаштування
                </button>
            </div>
            <Modal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                title="Налаштування гри"
            >
                <SettingsForm onClose={() => setIsSettingsOpen(false)} />
            </Modal>
        </div>
    );
};

export default StartPage;
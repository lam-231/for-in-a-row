import { useState } from 'react';
import Modal from '../components/Modal';
import SettingsForm from '../components/SettingsForm';
import { useSettings } from '../context/SettingsContext';

const StartPage = ({ onStart }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const { settings } = useSettings();

    return (
        <div className="page">
            <h2>Вітаємо у грі "4 в ряд"!</h2>

            <p>
                Гравці: <strong>{settings.player1Name}</strong> vs <strong>{settings.player2Name}</strong>
            </p>

            <p>Розмір поля: {settings.rows}x{settings.cols}</p>

            <div className="controls">
                <button onClick={onStart} className="play-btn">Почати гру</button>

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
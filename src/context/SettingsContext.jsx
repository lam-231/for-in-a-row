import { createContext, useContext, useState, useEffect } from 'react';
import { ROWS, COLS } from '../constants';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem('gameSettings');

        const defaultSettings = {
            rows: ROWS,
            cols: COLS,
            player1Name: 'Червоний',
            player2Name: 'Жовтий'
        };

        if (savedSettings) {
            try {
                const parsed = JSON.parse(savedSettings);
                   return { ...defaultSettings, ...parsed };
            } catch (e) {
                console.error("Помилка читання налаштувань", e);
                return defaultSettings;
            }
        }

        return defaultSettings;
    });

    useEffect(() => {
        localStorage.setItem('gameSettings', JSON.stringify(settings));
    }, [settings]);

    const updateSettings = (newSettings) => {
        setSettings(prev => ({
            ...prev,
            ...newSettings,
            rows: Number(newSettings.rows) || prev.rows,
            cols: Number(newSettings.cols) || prev.cols
        }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};
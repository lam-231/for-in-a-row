import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_ROWS = 6;
const DEFAULT_COLS = 7;

const loadFromStorage = () => {
    try {
        const saved = localStorage.getItem('gameSettings');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error("Помилка читання налаштувань:", e);
    }
    return {
        player1Name: 'Червоний',
        player2Name: 'Жовтий',
        rows: DEFAULT_ROWS,
        cols: DEFAULT_COLS,
    };
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: loadFromStorage(),
    reducers: {
        updateSettings: (state, action) => {
            const newSettings = action.payload;

            state.player1Name = newSettings.player1Name;
            state.player2Name = newSettings.player2Name;

            if (newSettings.rows) state.rows = Number(newSettings.rows);
            if (newSettings.cols) state.cols = Number(newSettings.cols);
        },
    },
});

export const { updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const loadHistory = () => {
    try {
        const saved = localStorage.getItem('gameResults');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
};

const resultsSlice = createSlice({
    name: 'results',
    initialState: loadHistory(),
    reducers: {
        addResult: (state, action) => {
            state.unshift(action.payload);
        },
        clearHistory: (state) => {
            return [];
        }
    },
});

export const { addResult, clearHistory } = resultsSlice.actions;
export default resultsSlice.reducer;
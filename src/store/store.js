import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import resultsReducer from './resultsSlice';

import { getCookieConsentValue } from "react-cookie-consent";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        results: resultsReducer,
    },
});

store.subscribe(() => {
    const consent = getCookieConsentValue("fourInARowGDPR");

    if(consent === "true") {
        const state = store.getState();
        localStorage.setItem('gameSettings', JSON.stringify(state.settings));
        localStorage.setItem('gameResults', JSON.stringify(state.results));
    }

});

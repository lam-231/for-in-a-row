export const ROWS = 6;
export const COLS = 7;

export const PLAYER_1 = 'red';
export const PLAYER_2 = 'yellow';

export const createEmptyBoard = () =>
    Array(ROWS).fill(null).map(() => Array(COLS).fill(null));
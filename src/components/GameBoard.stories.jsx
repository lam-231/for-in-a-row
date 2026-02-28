import GameBoard from './GameBoard';


const emptyBoard = Array(6).fill(null).map(() => Array(7).fill(null));

const inProgressBoard = Array(6).fill(null).map(() => Array(7).fill(null));
inProgressBoard[5][3] = 'red';
inProgressBoard[4][3] = 'yellow';
inProgressBoard[5][4] = 'red';
inProgressBoard[5][2] = 'yellow';

const winningBoard = Array(6).fill(null).map(() => Array(7).fill(null));
winningBoard[5][0] = 'red';
winningBoard[5][1] = 'red';
winningBoard[5][2] = 'red';
winningBoard[5][3] = 'red';
winningBoard[4][0] = 'yellow';
winningBoard[4][1] = 'yellow';
winningBoard[4][2] = 'yellow';


export default {
    title: 'Components/Complex/GameBoard',
    component: GameBoard,
    argTypes: {
        onColumnClick: { action: 'columnClicked', description: 'Викликається при кліку на колонку' },
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};


export const Empty = {
    args: {
        board: emptyBoard,
    },
};

export const InProgress = {
    args: {
        board: inProgressBoard,
    },
};

export const RedWins = {
    args: {
        board: winningBoard,
    },
};
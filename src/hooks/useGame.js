import { useState } from 'react';
import { ROWS, COLS, createEmptyBoard, PLAYER_1, PLAYER_2 } from '../constants';

export const useGame = () => {
    const [board, setBoard] = useState(createEmptyBoard());
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    const checkWinner = (boardState, player) => {
        const directions = [
            [0, 1],
            [1, 0],
            [1, 1],
            [1, -1]
        ];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (boardState[r][c] !== player) continue;

                for (let [dr, dc] of directions) {
                    let count = 0;
                    for (let i = 0; i < 4; i++) {
                        const nr = r + dr * i;
                        const nc = c + dc * i;

                        if (
                            nr >= 0 && nr < ROWS &&
                            nc >= 0 && nc < COLS &&
                            boardState[nr][nc] === player
                        ) {
                            count++;
                        } else {
                            break;
                        }
                    }
                    if (count === 4) return true;
                }
            }
        }
        return false;
    };

    const checkDraw = (boardState) => {
        return boardState.every(row => row.every(cell => cell !== null));
    };

    const makeMove = (colIndex) => {
        if (isGameOver) return;

        const newBoard = board.map(row => [...row]);

        let rowIndex = -1;
        for (let r = ROWS - 1; r >= 0; r--) {
            if (newBoard[r][colIndex] === null) {
                rowIndex = r;
                break;
            }
        }

        if (rowIndex === -1) return;

        newBoard[rowIndex][colIndex] = currentPlayer;
        setBoard(newBoard);

        if (checkWinner(newBoard, currentPlayer)) {
            setWinner(currentPlayer);
            setIsGameOver(true);
        } else if (checkDraw(newBoard)) {
            setWinner('draw');
            setIsGameOver(true);
        } else {
            setCurrentPlayer(prev => prev === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        }
    };

    const resetGame = () => {
        setBoard(createEmptyBoard());
        setCurrentPlayer(PLAYER_1);
        setWinner(null);
        setIsGameOver(false);
    };

    return { board, currentPlayer, winner, isGameOver, makeMove, resetGame };
};
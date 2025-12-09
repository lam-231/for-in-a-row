import { useState, useEffect } from 'react';
import { PLAYER_1, PLAYER_2 } from '../constants';

const createBoard = (rows, cols) =>
    Array(rows).fill(null).map(() => Array(cols).fill(null));

export const useGame = (rows, cols) => {
    const [board, setBoard] = useState(() => createBoard(rows, cols));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        resetGame();
    }, [rows, cols]);

    const checkWinner = (boardState, player) => {
        const directions = [
            [0, 1],
            [1, 0],
            [1, 1],
            [1, -1]
        ];

        const currentRows = boardState.length;
        const currentCols = boardState[0].length;

        for (let r = 0; r < currentRows; r++) {
            for (let c = 0; c < currentCols; c++) {
                if (boardState[r][c] !== player) continue;

                for (let [dr, dc] of directions) {
                    let count = 0;
                    for (let i = 0; i < 4; i++) {
                        const nr = r + dr * i;
                        const nc = c + dc * i;

                        if (
                            nr >= 0 && nr < currentRows &&
                            nc >= 0 && nc < currentCols &&
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
        for (let r = board.length - 1; r >= 0; r--) {
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
        setBoard(createBoard(rows, cols));
        setCurrentPlayer(PLAYER_1);
        setWinner(null);
        setIsGameOver(false);
    };

    return { board, currentPlayer, winner, isGameOver, makeMove, resetGame };
};
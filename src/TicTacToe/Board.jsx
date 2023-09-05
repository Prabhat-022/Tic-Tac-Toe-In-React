import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setisXTurn] = useState(true)

    //Wining condition
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6], // Diagonal from top-right to bottom-left
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;

            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]; // Return the winning symbol (e.g., 'X' or 'O')
            }
        }

        return false; // Return false if no winner is found
    }


    const isWinners = checkWinner();

    const handleClick = (index) => {

        if (state[index] !== null) {
            return;
        }

        console.log("clicked on index", index);
        
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setisXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null))
    }
    return (
        <div className="board-container">
            {isWinners ? (<>{isWinners} won the game <button onClick={handleReset}>Play Again</button></>) : (
                <>
                    <h4>Player {isXTurn ? "X" : "0"} Please Move</h4>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            )
            }
        </div>

    )
}

export default Board;
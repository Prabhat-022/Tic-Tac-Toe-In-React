
import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if ( board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }
  };

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      checkWinner();
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="container">
      <h1>Tic-Tac-Toe Game</h1> 
      <div className="game-board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="winner">{winner ? `Winner: ${winner}` : 'No winner yet'}</div>

      <div className="game-players">
        <div className="player player1">Player 1: X</div>
        <div className="player player2">Player 2: O</div>
      </div>

      <button className="restartBtn" onClick={restartGame}>
        Restart
      </button>
    </div>
  );
}

export default App;


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [item, setitem] = useState(Array(9).fill(null));
//   const [isXTurn, setIsXTurn] = useState();


//   const handleClick = (index) => {
    
//     setitem(item ? "x" : "0")


//     // const copyState = [...item];

//     // copyState[index] = isXTurn ? "x" : "0"; 
//     // setitem(copyState);
//     // setIsXTurn(!isXTurn);
//     // console.log("isXTurn");
//   }
//   return (
//     <div className="container">
//       <h1>Tic-Tac-Toe Game</h1>
//       <div className="game-board">
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//         <div className="cell" value={item} onClick={handleClick}>x</div>
//       </div>
//       <div className="winner"></div>


//       <div className="game-players">
//         <div className="player player1">Player 1 : </div>
//         <div className="player player2 ">Player 2 : </div>
//       </div>

//       <button className="restartBtn">
//         Restart</button>
//     </div>
//   );
// }

// export default App;

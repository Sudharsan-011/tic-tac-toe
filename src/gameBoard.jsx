// import React from "react";

// const initialGb = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({ onSelectSq, curSymbol, board }) {
  // let gameBoard = initialGb;

  // for (const turn of turns) {
  //   const { square, activePlayer } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = activePlayer;
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowId) => (
        <li key={rowId}>
          <ol>
            {row.map((col, colId) => (
              <li key={colId}>
                <button onClick={() => onSelectSq(rowId, colId)}  disabled={col !== null}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

import GameOver from "./GameOver";
import Player from "./Player"
import GameBoard from "./gameBoard"
import Log from "./log";
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./Winning_combi";

const initialGb = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function derivedState(gameState){
  let currentPlayer="X";
    if(gameState.length > 0 && gameState[0].activePlayer==="X"){
      currentPlayer="O";
    }
    return currentPlayer;
}

function App() {

  const [player,setPlayer]=useState({
    "X":"player1",
    "O":"player2",
  })
// const [active,setActive]=useState("X");
const[gameState,setGameState]=useState([]);

const active=derivedState(gameState);

function playerNameChange(symmbol,newName ){
 setPlayer ( prevPlayer=>{
  return{
  ...prevPlayer,
  [symmbol]: newName
  } ;
});
}







let gameBoard = [...initialGb.map( array => [...array])];
let winner="";
for (const turn of gameState) {
  const { square, activePlayer } = turn;
  const { row, col } = square;
  gameBoard[row][col] = activePlayer;
}

for(const combinations of WINNING_COMBINATIONS){
  const firstsq = gameBoard[combinations[0].row][combinations[0].column];
  const secondsq=gameBoard[combinations[1].row][combinations[1].column];
  const thirdsq =gameBoard[combinations[2].row][combinations[2].column];
if(firstsq &&
  firstsq===secondsq
  && firstsq===thirdsq
){
winner=player[firstsq];
}

}

function restartGame(){
  setGameState([])
}

function nowSelect(rowId,colId){
  // setActive((curActive) => curActive === "X"? "O":"X");
 
 
 
  setGameState( (prevTurn) =>{
  
    const active=derivedState(prevTurn);
  const updatedTerm=[{square:{row:rowId ,col: colId},activePlayer:active},...prevTurn];
  return updatedTerm;

});
}
    
  return <>
  <main>
    <div id="game-container" >
      <ol id="players" className="highlight-player">
        <Player name="Player-1" symbol="X" isActive={ active === "X"} onChangeName={playerNameChange}  />
        <Player name="Player-2" symbol="O" isActive={ active === "O"}  onChangeName={playerNameChange} />
      </ol>
      {winner && <GameOver winner={winner} restart={restartGame}  />}
      {/* <GameOver win={winner}/> */}
        <GameBoard  curSymbol={active} onSelectSq={nowSelect} board={gameBoard} />
    </div>
   <Log turns={gameState} />

  </main>

  </>

}

export default App

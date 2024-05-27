
export default function GameOver({ winner ,restart}){
return(<>

    <div id="game-over">
        <h2>Game-Over</h2>
        <p>{winner} WON!</p>    
        <p><button onClick={restart}>Re-Match?</button></p>
     </div>
</>
);
}
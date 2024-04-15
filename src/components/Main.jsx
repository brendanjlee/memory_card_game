import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";

function Main({pokemons, currScore, highScore, handleCardClick}) {
  return (
    <div className="main">
      <Scoreboard currScore={currScore} highScore={highScore}/>
      <Gameboard pokemons={pokemons} handleCardClick={handleCardClick} />
    </div>
  );
}

export default Main;
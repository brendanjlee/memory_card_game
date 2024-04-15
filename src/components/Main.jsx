import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";
import LoadingScreen from "./LoadingScreen";

function Main({pokemons, currScore, highScore, handleCardClick, isLoading}) {
  return (
    <div className="main">
      <Scoreboard currScore={currScore} highScore={highScore}/>
      {isLoading ? <LoadingScreen/> : <Gameboard pokemons={pokemons} handleCardClick={handleCardClick} /> }
    </div>
  );
}

export default Main;

function Scoreboard({currScore, highScore}) {
  return (
    <div className="scoreboard">
      <p>Score: {currScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default Scoreboard;
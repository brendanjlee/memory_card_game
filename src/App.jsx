import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'
import { useEffect, useState } from 'react'
import uniqid from 'uniqid'

const numCards = 10;
const seenPokemon = new Set(); // store id of the pokemon that's seen

function App() {
  const [pokeData, setPokeData] = useState([]); // array of pokemon info
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [startNewGame, setStartNewGame] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  /* Pokemon api functions */
  function getId(seen, limit) {
    let id = Math.floor(Math.random() * limit) + 1;
    while (seen.has(id)) {
      id = Math.floor(Math.random() * limit) + 1;
    }
    seen.add(id);
    return id;
  }
  async function getPokemon(amount) {
    console.log('loading new set')
    const seen = new Set();
    const limit = 493;

    const pokeData = [];

    setIsLoading(true);
    for (let i = 0; i < amount; i++) {
      const id = getId(seen, limit);
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const res = await fetch(url);
      const data = await res.json();

      // form pokemon data
      const name = data.name;
      const spriteUrl = data.sprites.front_default;
      const pokeId = data.id;

      pokeData.push({
        id: uniqid(),
        name: name,
        spriteUrl: spriteUrl,
        pokeId: pokeId
      });
    }
    setIsLoading(false);
    setPokeData(pokeData);
  }

  useEffect(() => {
    if (startNewGame) {
      getPokemon(numCards);
    }

    setStartNewGame(false);
  }, [startNewGame]);

  /**
   * Reset game and set the highscore
   */
  function resetGame() {
    setStartNewGame(true);
    seenPokemon.clear();
    setHighScore(Math.max(currScore, highScore));
    setCurrScore(0);
  }

  /**
   * Add the selected pokemon ID to the set 
   */
  function addId(id) {
    console.log(id)
    if (seenPokemon.has(id)) return false;
    seenPokemon.add(id);
    console.log(seenPokemon)
    return true;
  }

  /**
   *  Checks for win condition 
   */
  function checkGameWin() {
    if (seenPokemon.size === numCards) return true;
    return false;
  }

  /**
   * Shuffles the order of the pokemon data array
   * Creates a shallow copy
   */
  function shuffleCards() {
    const newArray = [...pokeData];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = tmp;
    }

    setPokeData(newArray);
  }

  function handleCardClick(id) {
    setHighScore(Math.max(currScore + 1, highScore));
    // game over
    if (!addId(id)) {
      resetGame();
      return;
    }
    // set score and shuffle deck
    setCurrScore(currScore + 1);
    shuffleCards();

    // won game
    if (!checkGameWin) {
      resetGame();
    }
  }

  if (isLoading) {
    return (
    <>
      <Header />
      <h1>Loading Data</h1>
    </>
  );
  }

  return (
    <div className='App'>
      <Header/>
      <Main
        currScore={currScore}
        highScore={highScore}
        pokemons={pokeData}
        handleCardClick={handleCardClick}
      />
      <Footer />
    </div>
  )
}

export default App

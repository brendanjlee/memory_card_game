const seen = new Set();
const limit = 493;

/**
 * Returns a random integer representing pokemon id within limit
 * @returns id number of pokemon
 */
function getId() {
  let id = Math.floor(Math.random() * limit);
  while (seen.has(id)) {
    id = Math.floor(Math.random() * limit);
  }
  seen.add(id);

  return id;
}

/**
 * Fetches random pokemon information from the pokeAPI
 * 
 * @param {Number} numPokemons number of pokemons to return
 */
async function getPokemon(numPokemons) {
  const pokemons = [];
  for (let i = 0; i < numPokemons; i++) {
    const id = getId();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(url);
    const pokemonData = await res.json();

    console.log(pokemonData.name);
    console.log(pokemonData.sprites.front_default);
    console.log('---')

    pokemons.push(pokemonData);
  }

  return pokemons;
}

export default getPokemon;
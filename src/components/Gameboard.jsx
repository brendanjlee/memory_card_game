import Card from "./Card";

function Gameboard({pokemons, handleCardClick}) {
  const pokemonList = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleCardClick={() => handleCardClick(pokemon.id)}/>
  ));

  return (
    <div className="gameboard">
      {pokemonList}
    </div>
  );
}

export default Gameboard;
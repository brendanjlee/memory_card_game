import '../styles/Card.css'

function Card({pokemon, handleCardClick}) {
  return (
    <button onClick={handleCardClick} className="card">
      <img src={pokemon.spriteUrl} alt='pokemonSprite'/>
      <span className='pokemon-name'>{pokemon.name}</span>
    </button>
  );
}

export default Card;
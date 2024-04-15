import '../styles/Card.css'
// import cardback from '../assets/cardback.png'

function Card({pokemon, handleCardClick}) {
  return (
    <button onClick={handleCardClick} className="card">
      <img src={pokemon.spriteUrl} alt='pokemonSprite' className='spriteImg'/>
      {pokemon.name}
    </button>
  );
}

export default Card;
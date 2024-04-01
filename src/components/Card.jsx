import '../styles/Card.css'
// import cardback from '../assets/cardback.png'

function Card({name, spriteUrl}) {

  return (
    <button className="card">
      <img src={spriteUrl} alt='cardback' className='spriteImg'/>
      <p>name: {name}</p>
    </button>
  );
}

export default Card;
import '../styles/Card.css'

const Card = ({ cost, attack, health, defense, name, description, type, image }) => {
  return (
    <div className='tcg-card'>
      <div className='tcg-card-header'>
        <div className='tcg-card-cost'>{cost}</div>
        <h2 className='tcg-card-name'>{name}</h2>
      </div>
      <div className='tcg-card-image'>
        <img src={image} alt={name} />
      </div>
      <div className='tcg-card-body'>
        <div className='tcg-card-type'>{type}</div>
        <p className='tcg-card-description'>{description}</p>
      </div>
      <div className='tcg-card-stats'>
        <div className='tcg-card-stat attack'>{attack}</div>
        <div className='tcg-card-stat health'>{health}</div>
        <div className='tcg-card-stat defense'>{defense}</div>
      </div>
    </div>
  )
}

export default Card

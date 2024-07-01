import '../styles/Card.css'

const Card = ({ cost, attack, health, defense, name, description, type, image }) => {
  let nameFontSize;

  if (name.length <= 16) {
    nameFontSize = '28px'
  } else if (name.length <= 18) {
    nameFontSize = '24px'
  } else if (name.length <= 22) {
    nameFontSize = '20px'
  } else {
    nameFontSize = '16px'
  }

  return (
    <div className='tcg-card'>
      <div className='tcg-card-header'>
        <div className='tcg-card-cost'>{cost}</div>
        <h2 className='tcg-card-name' style={{ fontSize: nameFontSize }}>
          {name}
        </h2>
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

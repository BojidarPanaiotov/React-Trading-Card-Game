import Card from '../game/Card'

import { CardTypeColors } from '../../constants/cardTypes'

const cards = [
  <Card
    cost={5}
    attack={5}
    health={1}
    defense={10}
    name='Titan Colossus'
    description='A mighty titan'
    type={CardTypeColors.find(card => card.type === 'Titan')}
    image='https://cdn.midjourney.com/78d9a5d7-a83c-4c32-8ccb-c8d064f89050/0_0.png'
  />,
]

const Decks = () => {
  return (
    <div className='center'>
      <ul style={styles.list}>
        {CardTypeColors.map(({ type, color }) => (
          <li key={type} style={{ ...styles.listElement, backgroundColor: color }}>
            {type}
          </li>
        ))}
      </ul>
      {cards}
    </div>
  )
}

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex',
    columnGap: '1rem',
    margin: '0',
  },
  listElement: {
    color: 'white',
    padding: '1rem',
    borderRadius: '5px',
    fontSize: '1rem',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
}

export default Decks

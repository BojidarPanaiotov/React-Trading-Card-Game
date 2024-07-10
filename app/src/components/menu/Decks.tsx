import Card from '../game/Card'

import { CardTypeColors } from '../../constants/cardTypes'

import '../styles/Decks.css'

const cards = [
  <Card
    key={'Titan Colossus'}
    cost={5}
    attack={5}
    health={1}
    defense={10}
    name='Titan Colossus'
    description='A mighty titan'
    type={CardTypeColors.find((card) => card.type === 'Titan')}
    image='https://cdn.midjourney.com/78d9a5d7-a83c-4c32-8ccb-c8d064f89050/0_0.png'
  />,
]

const Decks = () => {
  return (
    <div className='center'>
      <ul className='list'>
        {CardTypeColors.map(({ type, color }, index) => (
          <li
            key={index}
            style={{
              backgroundColor: color,
            }}
          >
            {type}
          </li>
        ))}
      </ul>
      {cards}
    </div>
  )
}

export default Decks

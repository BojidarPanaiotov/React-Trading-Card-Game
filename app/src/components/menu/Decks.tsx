import Card from '../game/Card'

const CardsMarkup = []

for (let index = 0; index < 100; index++) {
  CardsMarkup[index] = (
    <Card
      cost={Math.floor(Math.random() * 12) + 1}
      attack={Math.floor(Math.random() * 20) + 1}
      health={Math.floor(Math.random() * 20) + 1}
      defense={Math.floor(Math.random() * 20) + 1}
      name='Dragon Knight'
      description='A mighty warrior with the power of dragons.'
      type='Warrior'
      image='https://cdn.midjourney.com/2575c6e0-451d-405a-8d38-e8632c7ed148/0_0.png'
    />
  )
}

const Decks = () => {
  return <div className='center'>{CardsMarkup}</div>
}

export default Decks

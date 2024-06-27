import '../styles/Settings.css'

const Settings = ({ updateBanner }) => {
  const images = [
    'https://cdn.midjourney.com/1ac40251-313f-4715-8d1e-e1314a6c1211/0_2.png',
    'https://cdn.midjourney.com/cae5787c-84a7-4060-b0b9-025dc2aa80c7/0_0.png',
    'https://cdn.midjourney.com/76703fc8-0200-467a-a108-b7d4145fe54c/0_1.png',
    'https://cdn.midjourney.com/134de66d-bedd-4f4f-b2c5-768aabe62cb2/0_0.png',
    'https://cdn.midjourney.com/f7e1ced8-3c93-4c6d-9949-2033f1ec4faf/0_0.png',
  ]

  return (
    <div className='banner-settings'>
      <div className='banner-image-container'>
        {images.map((image, index) => (
          <div key={index} className='image-wrapper'>
            <img src={image} alt={`Background ${index + 1}`} />
            <button onClick={() => updateBanner(image)} className='apply-button'>
              Apply Background
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings

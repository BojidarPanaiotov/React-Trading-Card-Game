import { useState } from 'react'
import Banner from './components/Banner'
import Menu from './components/menu/Menu'

const App = () => {
  const bannerURL = './src/assets/banners/main.png'
  const [banner, setBanner] = useState(bannerURL)

  return (
    <div>
      <Banner url={banner} />
      <Menu updateBanner={setBanner} />
    </div>
  )
}

export default App

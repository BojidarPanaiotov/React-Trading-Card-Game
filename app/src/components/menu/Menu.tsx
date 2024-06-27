import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Battle from './Battle'
import Decks from './Decks'
import Store from './Store'
import './Menu.css'

const Menu = () => {
  return (
    <Router>
      <div className='App'>
        <nav className='nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/battle'>Battle</Link>
            </li>
            <li>
              <Link to='/decks'>Decks</Link>
            </li>
            <li>
              <Link to='/store'>Store</Link>
            </li>
          </ul>
        </nav>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/battle' element={<Battle />} />
            <Route path='/decks' element={<Decks />} />
            <Route path='/store' element={<Store />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Menu

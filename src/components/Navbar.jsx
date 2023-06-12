import React from 'react'
import {GameController, ShoppingCart} from 'phosphor-react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {

  return (
      <div className='container'>
        <div className='wrapper'>
          <div className='left'><span className='left-language'>EN</span>
            <Link to='/'className='link'>Games</Link>
            <Link to='/'className='link'>Consoles</Link>
            <Link to='/'className='link'>Accessories</Link>
          </div>
          <div className='mid'><span className='logo-title'>YourGame<GameController size={32}/></span></div>
          <div className='right'>
            <Link to='/'className='link'>Home</Link>
            <Link to='/MyCart' className='link-right'>
              <ShoppingCart size={35} />
              <div className='items-in-card'>{props.number}</div>
            </Link>
          </div>
        </div>
      </div>
  )
}

import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <div className='nav-area'>
            <a href="#" className='logo'>fronted pathshala</a>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header
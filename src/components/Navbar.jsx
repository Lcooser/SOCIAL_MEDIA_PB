import React from 'react'
import { Link } from 'react-router-dom'

import  './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/home`}>Anunx</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/home`}>Home</Link>
            </li>
            <li>
                <Link to={`/new`} className='new-btn'>Novo Post</Link>
            </li>
            <li>
                <Link to={`/profile`} className='new-btn'>Perfil</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
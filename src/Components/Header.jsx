import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
              <Link to="/"><img src="/image-gallery-logo.png" alt="" /></Link>
            </div>
            <li><Link to="/mobile-wallpapper">Telefon</Link></li>
            <li><Link to="/desktop-wallpapper">Masaüstü</Link></li>
        </nav>
    </header>
  )
}

export default Header

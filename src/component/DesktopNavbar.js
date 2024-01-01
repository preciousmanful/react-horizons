import React from 'react';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
import menuIcon from './bars-solid.svg';
function DesktopNavbar() {
  const navbar = [
      {
        id: 1,
        name: 'Home',
        href: '/'
      },
      {
        id: 2,
        name: 'Blog',
        href: '/blog'
      },
      {
        id: 3,
        name: 'Nesting',
        href: '/nesting'
      },
      {
        id: 4,
        name: 'Offsetting',
        href: '/offsetting'
    }
  ]


  return (
    <div className='navbar'>
        <Link to="/" className='title'>LOGO</Link>
        <div className='nav'>
          <img src={menuIcon} alt='menuIcon' id="menuIcon"/>
          <ul>
            {navbar.map((navItems) => 
                <li><NavLink to={navItems.href}>{navItems.name}</NavLink></li>
            )}
          </ul>
          </div>
    </div>
  )
}

export default DesktopNavbar
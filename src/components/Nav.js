import React from 'react'
import './style.css'
import logo from '../img/Vector.png'

export default function Nav() {
  return (
    <>
        <nav>
        <img className="logo" src={logo} alt="logo" />
        <div className="company-name">Culinary kitchen</div>
    </nav>
    </>
  )
}

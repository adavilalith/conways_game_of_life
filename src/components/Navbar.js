import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navdiv'>
      <h1 className='logo'>Conway's Game of Life</h1>
      <nav class="nav__links">
        <li ><a href="./app.js">Rules</a></li>
        <li ><a href="./app.js">Wiki</a></li>
        <li ><a href="./app.js">Source Code</a></li>
      </nav>
      <a href="./apps.js"><button id='contactbtn'>Contact</button></a>
    </div>
  )
}

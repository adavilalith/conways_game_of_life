import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className='navdiv'>
      <h1 className='logo'>Conway's Game of Life</h1>
      <nav class="nav__links">
        <li ><a href={props.link1} target="_blank" rel="noreferrer">{props.section1}</a></li>
        <li ><a href={props.link2} target="_blank" rel="noreferrer">{props.section2}</a></li>
        <li ><a href={props.link3} target="_blank" rel="noreferrer">{props.section3}</a></li>
      </nav>
      <a href={props.contactLink} target="_blank" rel="noreferrer"><button id='contactbtn'>Let's Connect!</button></a>
    </div>
  )
}

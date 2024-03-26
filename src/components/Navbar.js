import React from 'react'
import { Button } from 'react-bootstrap'
import RulesModal from './RulesModal'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand h1 me-0 pe-0" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  me-3 ms-5 ">
          <a className="nav-link" href={props.link2} target='blank'>Wiki</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href={props.link3} target='blank'>Source Code</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href={props.contactLink} target='blank'>Let's Connect</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}



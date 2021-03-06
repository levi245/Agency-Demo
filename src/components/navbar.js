import React from 'react'
import logo from '../human-resources.png'
import { LINK } from 'react-router-dom'
function navbar() {
    return (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <LINK to="/" className="navabr-logo">
          JUSTHIRED <i className="fab fa-magento"></i>
        </LINK>
        <a className="navbar-brand" href="#"><img classname="logo" src={logo} alt="logo"/>JUSTHIRED</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            
          </ul>
          
        </div>
  </div>
</nav>

    )
}

export default navbar

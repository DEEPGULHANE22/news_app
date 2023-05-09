// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NEWS-KOWLWDGE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-Link" aria-current="page" href="/" style={{textDecoration:"none",color:"white",padding:"5px"}}>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/business" style={{textDecoration:"none",color:"white",padding:"5px"}}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/entertainment" style={{textDecoration:"none",color:"white",padding:"5px"}}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/general" style={{textDecoration:"none",color:"white",padding:"5px"}}>General</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/health" style={{textDecoration:"none",color:"white",padding:"5px"}}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/science" style={{textDecoration:"none",color:"white",padding:"5px"}}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/sport"style={{textDecoration:"none",color:"white",padding:"5px"}}>Sport</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/technology" style={{textDecoration:"none",color:"white",padding:"5px"}}>Technology</a>
        </li>
    
    
      </ul>
    
    </div>
  </div>
</nav>
</div>
    )
  }
}

export default Navbar
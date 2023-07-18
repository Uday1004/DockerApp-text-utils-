
// Navbar  is component of our website let example ki mujhe meri website me kuch component chahiye jise me direct kuch bhi changes de saku jo bhi required hoge
// ye prop me use hota he , we have prop and proptypes , ye dono class based or function based component he

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">{props.contact}</Link>
              </li>
              

            </ul>
             
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode!</label>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

// proptypes ka use hum value pass karne ke liye karte he , jese navbar me agar kuch he to kese direct title change kr sakte he 
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string

  // agar kuch value pass nahi he App.js me to default value yaha se utha lo 
}
Navbar.defaultProps = {
  title: 'set title'
}
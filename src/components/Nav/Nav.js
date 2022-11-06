import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";


function nav() {
  return (
    <div>
        <nav className='navbar'>
        <Link to="../Home/Home" className='links'>Home</Link>
        <Link to="../Repo/Repo" className='links'>Repo</Link>
      </nav>
    </div>
  )
}

export default nav
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img className='logo' src={Logo}/>
        </div>
          <div className='links'>
            <Link className='link' to='/'><h6>Home</h6></Link>
            <Link className='link' to='/write'><h6>Write</h6></Link>
            <Link className='link'><h6>Profile</h6></Link>
            <Link className='link'><h6>Notification</h6></Link>
            <Link className='link'><h6>Catagory</h6></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar
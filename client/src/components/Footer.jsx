import React from 'react'
import Logo from '../images/logo.png'
import ReactLogo from '../images/react.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='logo'>
        <img className='logo' src={Logo}/>
      </div>
          <span>made with 💗 and react.js <img className='react-logo' src={ReactLogo}/></span>
    </div>
  )
}

export default Footer
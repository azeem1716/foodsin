import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faPhone , faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className='main-header'>
      <div className='topbar'>
      All the prices are exclusive of sales tax.
      </div>
      
      <div className='topbar-container'>
      <div className='container'>
      <div className='row align-items-center justify-content-center text-center'>
  <div className='col-lg-4 d-flex justify-content-center align-items-center'>
    <button className='topbar-btn'><FontAwesomeIcon icon={faLocationDot} className='me-2' />Change Location</button>
    <button className='topbar-btn ms-3'><FontAwesomeIcon icon={faPhone} className='me-2' />123456789</button>
  </div>
  <div className='col-lg-4 d-flex justify-content-center align-items-center'>
    <img className='header-logo' src="https://foodsinn.co/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1728388057-Foods-Inn-Original-Logo.png%3Fq%3D10&w=128&q=75" alt="" />
  </div>
  <div className='col-lg-4 d-flex justify-content-center align-items-center'>
    <button className='topbar-btn'>Reservation Form</button>
    <FontAwesomeIcon className='ms-3' size='2x' icon={faCartShopping} />
  </div>
</div>
      </div>
    </div>
    </div>
  )
}

export default Header

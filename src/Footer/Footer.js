import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-img'>
            <img src='../Images/fa-brands_facebook-square.png'></img>
            <img src='../Images/fa-brands_youtube.png'></img>
            <img src='../Images/fa-brands_twitter.png'></img>
            <img src='../Images/fa-brands_instagram.png'></img>
        </div>
        <div className='footer-text'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>

        <p className='footer-info'>© 2023 MovieBox by Peter Adeyemi Ige</p>
    </div>
  )
}

export default Footer

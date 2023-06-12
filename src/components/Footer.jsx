import React from 'react'
import './Footer.css'
import { Envelope, FacebookLogo, InstagramLogo, MapPin, Phone, TwitterLogo } from 'phosphor-react'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-container-left'>
          <h3>Links</h3>
          <h4>Games</h4>
          <h4>Accessories</h4>
          <h4>Consoles</h4>
        </div>
        <div className='footer-container-mid'>
          <h3>YourGame.</h3>
          <div className='footer-container-mid-icons'>
            <TwitterLogo size={34} className='icon'/>
            <FacebookLogo size={34} className='icon'/>
            <InstagramLogo size={34} className='icon'/>
          </div>
        </div>
        <div className='footer-container-right'>
          <h3>Contact</h3>
          <div className='footer-container-right-contact-info'>
          <div className='contact-info-paragraph'><Phone size={32} />123 456 123</div>
          <div className='contact-info-paragraph'><MapPin size={32} />Cracow</div>
          <div className='contact-info-paragraph'><Envelope size={32} />kacpertokajj@gmail.com</div>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Newsletter.css'
import { HandWaving, PaperPlaneTilt } from 'phosphor-react'

export const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <h2 className='newsletter-header'>Newsletter <HandWaving size={48} /></h2>
        <p className='newsletter-text'>enter your email to receive information about promotions</p>
        <div className='newsletter-send-content'>
        <input type='text' placeholder='Enter your email...' className='newsletter-input'></input>
        <div className='send-icon'><PaperPlaneTilt size={32} /></div>
        </div>
    </div>
  )
}

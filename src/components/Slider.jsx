import React from 'react'
import './Slider.css'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { useState } from 'react'

export const Slider = () => {
    const [slideValue, setSlideValue] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideValue(slideValue > 0 ? slideValue - 1 : 2)
            document.getElementById("slider-c").style.transform = `translateX(${slideValue * -100}vw)`
        }else {
            setSlideValue(slideValue < 2 ? slideValue + 1 : 0)
            document.getElementById("slider-c").style.transform = `translateX(${slideValue * -100}vw)`
        }
    }

  return (
    <div className='slider-container'>
        <div className='arrow-div-left' onClick={()=>handleClick("left")}>
            <ArrowLeft size={32} />
        </div>
        <div className='slider-content' id='slider-c'>
            <div className='slide-first'>
                <div className='slide-image'>
                    <img src={require('../assets/slider_one.png')} alt="" className='image'/>
                </div>
                <div className='slide-info'>
                    <h2 className='slide-info-title'>SUMMER SALE!</h2>
                    <div className='slide-info-description'>You are getting 50% off for buying two games from the same category</div>
                    <button className='slide-info-button'>LEARN MORE</button>
                </div>
            </div>
            <div className='slide-second'>
                <div className='slide-image'>
                    <img src={require('../assets/slider_two.png')} alt="" className='image-mid'/>
                </div>
                <div className='slide-info'>
                    <h2 className='slide-info-title'>TIME FOR NEW CHALLENGES!</h2>
                    <div className='slide-info-description'>Check our newest offer and choice something for yourself</div>
                    <button className='slide-info-button'>LEARN MORE</button>
                </div>
            </div>
            <div className='slide-third'>
                <div className='slide-image'>
                    <img src={require('../assets/slider_three.webp')} alt="" className='image'/>
                </div>
                <div className='slide-info'>
                    <h2 className='slide-info-title'>A LOT OF ACCESSORIES!</h2>
                    <div className='slide-info-description'>Find something interesting on our accessories site and be happy for new opportunities</div>
                    <button className='slide-info-button'>LEARN MORE</button>
                </div>
            </div>
        </div>
        <div className='arrow-div-right' onClick={()=>handleClick("right")}>
            <ArrowRight size={32} />
        </div>
    </div>
  )
}

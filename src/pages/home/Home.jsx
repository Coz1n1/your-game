import React from 'react'
import {Slider} from '../../components/Slider'
import { PRODUCTS, POPULAR } from '../../data'
import { Product } from './Product'
import './Home.css'
import { Newsletter } from '../../components/Newsletter'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { PopularProduct } from './PopularProduct'

export const Home = () => {
  const {countItems} = useContext(Context)

  return (
    <div>
        <Navbar number={countItems}/>
        <Slider/>
        <div className='all-products'>
          {PRODUCTS.map((product)=>(
            <Product data={product}/>
          ))}
        </div>
        <span className='all-popular-header'>Trending now</span>
        <div className='all-popular'>
            {POPULAR.map((popular)=>(
              <PopularProduct data={popular}/>
            ))}
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

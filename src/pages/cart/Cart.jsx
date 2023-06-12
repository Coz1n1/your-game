import React, { useContext } from 'react'
import {Context} from '../../context/Context'
import { PRODUCTS } from '../../data'
import { CartProduct } from './CartProduct'
import './cart.css'
import { Navbar } from '../../components/Navbar'

export const Cart = () => {
    const {items} = useContext(Context)
    const {countItems, totalAmount} = useContext(Context)

  return (
    <>
    <Navbar number={countItems}/>
    <div className='cart-container'>
        <div className='cart-header'>Your Cart Items</div>
        <div  className='cart-items'>
            {PRODUCTS.map((item) => {
                if(items[item.id] !== 0){
                    return <CartProduct data={item} amount={items[item.id]}/>
                }
            })}
        </div>
        <div className='cart-total'>Total amount: {totalAmount}zl<button className='cart-purchase'>Purchase</button></div>
    </div>
    </>
  )
}

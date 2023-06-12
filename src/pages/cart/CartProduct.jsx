import React from 'react'
import { Context } from '../../context/Context';
import { useContext } from 'react';

export const CartProduct = (props) => {
    const {id, name, price, image} = props.data;
    const {deleteItem} = useContext(Context)

  return (
    <div className='cartproduct-container'>
        <div className='cartproduct-imagecontainer'><img src={image} alt='' className='cartproduct-image'/></div>
        <div className='cartproduct-name'>{name}</div>
        <div className='cartproduct-price'>Value: {price}zl</div>
        <div className='cartproduct-amount'>Amount: {props.amount}</div>
        <div className='cartproduct-delete-container'><button className='cartproduct-delete' onClick={()=>deleteItem(id, price)}>Delete Item</button></div>
    </div>
  )
}

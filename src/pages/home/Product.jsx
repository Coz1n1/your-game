import React from 'react'
import { ShoppingBagOpen } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
    const {id, name, price, image} = props.data;
    const navigate = useNavigate()

  return (
    <div className='product'>
        <div className='product-image'><img src={image} alt="" className='product-image-content'/></div>
        <div className='product-name'>{name}</div>
        <div className='product-price'>Price: {price}</div>
        <button className='product-buy' onClick={()=>navigate(`/product/${id}`)}><ShoppingBagOpen size={32} className='product-buy-icon'/></button>
    </div>
  )
}

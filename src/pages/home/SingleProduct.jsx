import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PRODUCTS } from '../../data'
import { ArrowLeft, MinusCircle, PlusCircle } from 'phosphor-react';
import { Footer } from '../../components/Footer';
import {Context} from '../../context/Context'
import { Navbar } from '../../components/Navbar';

export const SingleProduct = () => {
    const [count, setCount] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const {id} = useParams();
    const product = PRODUCTS.find(p => String(p.id) === id)
    const {addItem, countItems} = useContext(Context)
    const navigate = useNavigate('')

    const handleClick = (action) => {
        if(action === "minus" && count > 0){
            setCount(count => count-=1);
            setCurrentPrice(currentPrice => currentPrice -= product.price)
        }else if(action === "plus"){
            setCount(count => count+=1);
            setCurrentPrice(currentPrice => currentPrice += product.price)
        }
    }

    const back = () => {
        navigate('/')
    }

  return (
    <>
        <Navbar number={countItems}/>

        {
        product
        ? (
            <div className='singleproduct-container'>
                <ArrowLeft size={32} color="#d7a947" className='back-icon' onClick={back}/>
                <div className='singleproduct-image-container'>
                    <img src={product.image} alt="" className='singleproduct-image'/>
                </div>
                    <div className='singleproduct-info'>
                        <div className='singleproduct-name'>
                            {product.name}
                        </div>
                        <div className='singleproduct-description'>
                            {product.description}
                        </div>
                        <div className='singleproduct-price'>
                            Price: {product.price}zl
                        </div>
                        <div className='singleproduct-copies'>
                            <span className='count-header'>Copies: </span>
                            <div className='count-management'>
                            <MinusCircle size={32} className='count-icon' onClick={() => handleClick("minus")}/><span className='count-copies'>{count}</span><PlusCircle size={32} className='count-icon' onClick={()=>handleClick("plus")}/>
                            </div>
                            <div>
                                {currentPrice > 0 &&
                                    <div className='singleproduct-current-value'>
                                        Current Value: {currentPrice}zl 
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='singleproduct-add-container'>
                            <button className='singleproduct-add-to-cart' onClick={()=>addItem(id, count, product.price)}>Add to cart</button>
                        </div>
                </div>
            </div>
        )
        : <p>Can't find</p>
        }
        <Footer/>
    </>
  )
}

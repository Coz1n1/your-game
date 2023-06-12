import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../data';

export const Context = createContext("")

const defaultCart = () => {
    let cart = {};
    for(let i = 1; i <= PRODUCTS.length; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ContextProvider = (props) => {
    const [items, setItems] = useState(defaultCart());
    const [countItems, setCountItems] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)

    const addItem = (itemId, itemNumber, price) => {
        setItems((prev) => ({...prev, [itemId]: prev[itemId] + itemNumber}))
        setCountItems(countItems => countItems+=itemNumber)
        setTotalAmount(totalAmount => totalAmount+= price* itemNumber)
    }

    const deleteItem = (itemId, price) => {
        setItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        setCountItems(countItems => countItems-=1)
        setTotalAmount(totalAmount => totalAmount-=price)
    }

    const contextValue = {items, countItems, totalAmount,addItem, deleteItem}
    console.log(items)
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

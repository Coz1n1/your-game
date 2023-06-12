import React from 'react'

export const PopularProduct = (props) => {
    const {id, name, image} = props.data

  return (
    <div className='popular'>
        <div className='popular-position'>{id}.</div>
        <div className='popular-image'><img src={image} alt="" className='popular-image-content'/></div>
        <div className='popular-name'>{name}</div>
    </div>
  )
}

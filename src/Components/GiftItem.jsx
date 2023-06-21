import React from 'react'
import PropTypes from 'prop-types'; // ES6

export const GiftItem = ({id,title,urlImg}) => {
  return (
        <>
        <div className='card'>
            <img src={urlImg} alt={title} />
            <p>{title}</p>  
        </div>
        
        </>
  )
}

GiftItem.propTypes={
  title:PropTypes.string.isRequired,
  urlImg:PropTypes.string.isRequired
}
import React from 'react';
import "./product.css"



const Product = ({img, link}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle red"></div>
        <div className="p-circle yellow"></div>
        <div className="p-circle green"></div>
      </div>
      <a href={link} target={"_blank"} rel={"noopener noreferrer"}>
        <img src={img} alt="" className='p-img'/>
      </a>
    </div>
  )
}

export default Product
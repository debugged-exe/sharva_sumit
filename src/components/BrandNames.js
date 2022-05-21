import React from 'react'
import brand_img from "./images/solution.png";
const BrandNames = () => {
  return (
    <div><div className="container  rounded text-dark fw-5">
    <p className='m-2 p-2'>


OUR COMMUNITY MEMBERS COME FROM
    </p>
        <div className="brand_names m-3 ">
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
            <img width='60px' src={brand_img} alt="error" className="brand" />
        </div>
    </div></div>
  )
}

export default BrandNames
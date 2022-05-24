import React from 'react'
import brand_img from "./images/amazon-pay.png";
const BrandNames = () => {
  return (
    <div><div className=" container rounded text-dark fw-5">
    <p className=' m-0 brand_name_title '>


BRANDS THAT HAVE HELPED US IN OUR INITIATIVES
    </p>
        <div className="brand_names m-0 ">
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
            <img width='120px' src={brand_img} alt="error" className="brand" />
        </div>
    </div></div>
  )
}

export default BrandNames
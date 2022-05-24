import React from 'react'
import merchancise_tshirt from "./images/merchandise_tshirt.jpg";

const MerchantDise = () => {
  return (
    <div>
    <div className="merchandise ">
      {/* <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3> */}
      <h1>OWN YOURS NOW!  </h1>
      <div className="merchandise_main_box">
        <img width="300px" src={merchancise_tshirt} alt="error" />
        <div className="merchandise_content m-3 p-3">We at Sharva Foundation are elated to announce that our merchandise is here! <br />
We as a growing NGO wanted to recognise all of your efforts by giving you these as a token of appreciation! The price for the Merchandise is ₹350+ shipping charges *(shipping charges will be applicable based on your address and it will not exceed ₹50) </div>
        <div className="line "><button className='bg-white px-4 p-2 rounded-pill text-yellow '>get your merchandise!</button></div>
        
      </div>
    </div>
    
    <div className="join_us bg-dark d-flex  justify-content-center pt-3">
        <div className="content m-4  text-white w-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur incidunt nulla ullam quasi, facilis tempore praesentium eveniet et voluptate. Unde nulla tempori.</div>
        <div className="button m-4"><button className='bg-white px-4 p-2 rounded-pill text-yellow '>join us now</button></div>
    </div>
    </div>
  )
}

export default MerchantDise
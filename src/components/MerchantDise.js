import React from 'react'
import merchancise_tshirt from "./images/merchandise_tshirt.jpg";

const MerchantDise = () => {
  return (
    <div>
    <div className="merchandise ">
      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
      <h1>Lorem ipsum dolor sit amet  </h1>
      <div className="merchandise_main_box">
        <img width="300px" src={merchancise_tshirt} alt="error" />
        <div className="merchandise_content m-3 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias quia velit, maiores omnis laboriosam non natus rerum quos nihil eum corrupti magni, earum aspernatur atque adipisci vel sit harum?</div>
        <div className="line"></div>
        <div className="line line2"></div>
      </div>
    </div>
    
    <div className="join_us bg-dark d-flex  justify-content-center mt-5 pt-3">
        <div className="content m-4  text-white w-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur incidunt nulla ullam quasi, facilis tempore praesentium eveniet et voluptate. Unde nulla tempori.</div>
        <div className="button m-4"><button className='bg-white px-4 p-2 rounded-pill text-yellow '>join us now</button></div>
    </div>
    </div>
  )
}

export default MerchantDise
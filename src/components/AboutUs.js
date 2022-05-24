import React from "react";
import gallery_img_2 from "./images/gallery_img_2.jpg";
import brand_img from "./images/amazon-pay.png";

const AboutUs = () => {
  return (
    <div className="container my-5 py-5">
      <div className="headings_about_us m-3  container">
        <h5 >Lorem ipsum dolor sit amet.</h5>{" "}
        <h1 >Lorem ipsum dolor sit amet.</h1>
      </div>
      <div className="main_div_about d-flex  justify-content-between">
        <div className="content_about d-flex row justify-content-center ">
          <div className="sec1 m-2 p-1">
             <h3><img width='50px' src={brand_img} alt="" />  Lorem, ipsum dolor.</h3>{" "}
            <div className="details_about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              sint praesentium ratione facere voluptatibus pariatur neque cumque
              vitae. Corporis nesciunt porro est dicta cupiditate voluptates
              officia doloremque odio! Sapiente, recusandae.
            </div>
          </div>
          <div className="sec1 m-2 p-1">
            <h3><img width='50px' src={brand_img} alt="" /> Lorem, ipsum dolor.</h3>{" "}
            <div className="details_about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              sint praesentium ratione facere voluptatibus pariatur neque cumque
              vitae. Corporis nesciunt porro est dicta cupiditate voluptates
              officia doloremque odio! Sapiente, recusandae.
            </div>
          </div>

        </div>
        <div className="image_about "><img width='600px' src={gallery_img_2} alt="" /></div>
      </div>
    </div>
  );
};

export default AboutUs;

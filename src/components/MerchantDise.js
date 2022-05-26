import React from "react";
import merchancise_1 from "./images/merchandise_1.png";
import merchancise_2 from "./images/merchandise_2.png";
import merchancise_3 from "./images/merchandise_3.png";

const MerchantDise = () => {
  return (
    <div>
    <div className="join_us bg-dark d-flex  justify-content-center p-3">
        <div className="content m-4  text-white w-60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          incidunt nulla ullam quasi, facilis tempore praesentium eveniet et
          voluptate. Unde nulla tempori.
        </div>
        <div className="button m-4">
          <button className="bg-white px-4 p-2 rounded-pill text-yellow ">
            join us now
          </button>
        </div>
      </div>
      <div className="merchandise ">          
        {/* <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3> */}
        <h1>OWN YOURS NOW! </h1>
        <div className="merchandise_main_box">
          <div
            id="carouselExampleIndicators"          
            class=" caruosel_for_merchandise carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img  src={merchancise_1} alt="error" />
              </div>
              <div class="carousel-item">
                <img  src={merchancise_2} alt="error" />
              </div>
              <div class="carousel-item">
                <img  src={merchancise_3} alt="error" />
              </div>
            </div>
          </div>
          <div className="merchandise_content m-3 p-3">
            We at Sharva Foundation are elated to announce that our merchandise
            is here! <br /> <br />
            We as a growing NGO wanted to recognise all of your efforts by
            giving you these as a token of appreciation! The price for the
            Merchandise is ₹350+ shipping charges *(shipping charges will be
            applicable based on your address and it will not exceed ₹50){" "}
          </div>
          <div className="line ">
            <button className="bg-white  rounded-pill text-yellow ">
              get your merchandise!
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MerchantDise;

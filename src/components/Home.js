import React from "react";
import gallery_img_4 from "./images/gallery_img_4.jpg";
import "./CSS/home.css";
const Home = () => {
  return (
    <div className=" d-flex justify-content-center w-100">
      {/* buttons */}
      {/* <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      {/* buttons */}
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active img-gradient" data-bs-interval="3000">
            <img
              src={gallery_img_4}
              class="d-block w-100"
              alt="error"
            />
            <div class="carousel-caption d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
          </div>
          <div class="carousel-item  img-gradient" data-bs-interval="3000">
            <img
              src={gallery_img_4}
              class="d-block w-100"
              alt="error"
            />
            <div class="carousel-caption  d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
          </div>
          <div class="carousel-item img-gradient" data-bs-interval="3000">
            <img
              src={gallery_img_4}
              class="d-block w-100"
              alt="error"
            />
            <div class="carousel-caption d-md-block">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

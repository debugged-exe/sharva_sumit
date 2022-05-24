import React from "react";
import "./CSS/home.css";
const Home = () => {
  return (
    <div className=" d-flex justify-content-center w-100">
      {/* buttons */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
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
      </div>
      {/* buttons */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active img-gradient" data-bs-interval="5000">
            <div className="img"></div>
            <div className="carousel-caption">
        <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
        <div className="button m-4"><button className='bg-dark px-4 p-2  text-yellow '>join us now</button></div>
      </div>
          </div>
          <div className="carousel-item  img-gradient" data-bs-interval="5000">
          <div className="img"></div>
            <div className="carousel-caption  ">
        <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
        <div className="button m-4"><button className='bg-dark px-4 p-2  text-yellow '>join us now</button></div>
      </div>
          </div>
          <div className="carousel-item img-gradient" data-bs-interval="5000">
          <div className="img"></div>
            <div className="carousel-caption">
        <h1>लोका: समस्ता: सुखिनो भवन्तु ।</h1>
        <div className="button m-4"><button className='bg-dark px-4 p-2  text-yellow '>join us now</button></div>
      </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

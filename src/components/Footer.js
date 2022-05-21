import React from "react";
import map_image from "./images/mapbox.png";
const Footer = () => {
  return (
    <div>
      <div className="map m-0 d-flex  ">
        <img src={map_image} alt="" />
        <div className="form m-4  ">
          <div class="contact-us">
            <div className="heading_contact">
              {" "}
              <h5 className="text-yellow">Lorem ipsum dolor sit amet.</h5>{" "}
              <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <form action="#" className="my-5 contact_us_form">
              <div className="d-flex m-2 input_box_1">
                <input
                  id="customerName"
                  name="customerName"
                  required=""
                  placeholder="NAME"
                  type="text"
                />

                <input  
                  id="customerEmail"
                  name="customerEmail"
                  required=""
                  placeholder="EMAIL"
                  type="email"
                />
              </div>

              <div className="d-flex mx-2 input_box_1">
                <input
                  id="customerPhone"
                  name="customerPhone"
                  placeholder="PHONE NUMBER  "
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  type="tel"
                />
                <input
                  id="customerPhone"
                  name="customerPhone"
                  placeholder="PHONE NUMBER "
                  type="tel"
                />
              </div>

              <textarea
                id="customerNote"
                name="customerNote"
                placeholder="MESSAGE"
                required=""
                rows="4"
              ></textarea>
              <div className="button">
                <button id="customerOrder">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="line"></div>
        <div className="footer "><nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid ">
    <a class="navbar-brand text-white" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link text-white active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-white" href="/">Features</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-white" href="/">Pricing</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-white disabled">Disabled</a>
        </li>
      </ul>
   
  </div>
</nav></div>
      </footer>
    </div>
  );
};

export default Footer;

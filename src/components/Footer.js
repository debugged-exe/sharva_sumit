import React from "react";
import map_image from "./images/mapbox.png";

import phone_call from "./images/phone-call.png";
import clock from "./images/clock.png";
import mail from "./images/mail.png";
import signpost from "./images/signpost.png";
const Footer = () => {
  return (
    <div>
      <div className="map m-0 d-flex  ">
        <img src={map_image} alt="" />
        <div className="form m-4  ">
          <div className="contact-us">
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
        <div className="footer bg-dark d-flex col">
          <div className="contact_information m-1 p-2">
            <h5>CONTACT INFORMATION</h5>
            <div className="address d-flex col  m-3   align-items-center">
              <img src={signpost} width = "35px " height = "40px" alt="errr" />
              <div className="mx-2 ">
                {" "}
                adress <br />
                flat not 102 kanchan palace{" "}
              </div>
            </div>
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center">
              <img src={phone_call} width = "30px " height = "30px" alt="errr" />
              <div className="mx-2">
                {" "}
                phone  <br />
                749-861-2751{" "}
              </div>
            </div>
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={mail} width = "30px " height = "30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress <br />
                sumitbarmecha12@gmail.com{" "}
              </div>
            </div><div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center">
              <img src={clock} width = "30px " height = "30px" alt="errr" />
              <div className="mx-2">
                {" "}
                working hours/days <br />
                7am-9pm/monday-friday{" "}
              </div>
            </div>
          </div>
          <div className="footer_section_2 d-flex row">
            <div className="footer_2 d-flex col justify-content-evenly ">
              <div className="my_account">
                <h5>OUR INITIATIVES</h5>
                <ul>
                  <li>ABOUT US </li>
                  <li>contact us </li>
                  <li>my account</li>
                  <li>order history</li>
                  <li>covid 19</li>
                </ul>
              </div>
              <div className="main_Feature ">
                <h5>MAIN FEATURES </h5>
                <ul>
                  <li>super fast magneto theme</li>
                  <li>super fast magneto theme</li>
                  <li>super fast magneto theme</li>
                  <li>super fast magneto theme</li>
                  <li>super fast magneto theme</li>
                </ul>
              </div>
              <div className="be_the_first">
                <h5>OUR VISION</h5>
                <p>
                We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love.
                </p>{" "}
                
              </div>
            </div>
            <div className="line"></div>
            <div className="credit m-3">
              <div className="cards_image">All rights reserved </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

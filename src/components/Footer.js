import React from "react";
import map_image from "./images/mapbox.png";
import hr from "./images/hr.png"; 
import instagram from "./images/instagram.png";
import handshake from "./images/handshake.png";
import mail from "./images/mail.png";
import signpost from "./images/signpost.png";
const Footer = () => {
  return (
    <div>
      <div className="map m-0 d-flex  ">
        <div className="map_image_box">
          <img className="map_image" src={map_image} alt="" />
          {/* <div className="img_content">
            <div className=" img_box_content team">
              <img className="contact_map_logo" src={group} alt=" " />
              <div className="logo text-white">
                <h5>Team</h5> <p>team.sharvafoundation@gmail.com</p>
              </div>
            </div>
            <div className=" img_box_content manager">
              <img className="contact_map_logo" src={handshake} alt=" " />
              <div className="logo text-white">
                <h5>Manager</h5> <p>managersharvafoundation@gmail.com</p>
              </div>
            </div>
            <div className=" img_box_content team">
              <img className="contact_map_logo" src={hr} alt=" " />
              <div className="logo text-white">
                <h5>HR</h5> <p>hr.sharvafoundation@gmail.com</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="form   ">
          <div className="contact-us">
            <div className="heading_contact">
              {" "}
              <h1>CONTACT US</h1>
              <div className="line"></div>
              <h5 className="text-yellow">
                Any help that goes undocumented can result in the failure of
                someone’s livelihood and survival. It is of utmost importance
                that this be prevented. There’s where we come in. And only by
                contacting us can you acquire a platform that helps to
                distribute this aid.
              </h5>{" "}
            </div>
            <form action="#" className="my-5 contact_us_form">
              <div className="d-flex m-2  input_box_1">
                <input
                  id="customerName"
                  className="rounded"
                  name="customerName"
                  required=""
                  placeholder="NAME"
                  type="text"
                />

                <input
                  id="customerName"
                  className="rounded"
                  name="customerEmail"
                  required=""
                  placeholder="EMAIL"
                  type="email"
                />
              </div>

              <div className="d-flex mx-2 input_box_1">
                <input
                  id="customerName"
                  className="rounded"
                  name="customerPhone"
                  placeholder="PHONE NUMBER  "
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  type="tel"
                />
                <input
                  id="customerName"
                  className="rounded"
                  name="customerPhone"
                  placeholder="PHONE NUMBER "
                  type="tel"
                />
              </div>

              <textarea
                id="customerNote"
                className="rounded"
                name="customerNote"
                placeholder="MESSAGE"
                required=""
                rows="4"
              ></textarea>
              <div className="button rounded">
                <button className="rounded" id="customerOrder">SUBMIT</button>
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
              <img src={signpost} width="35px " height="40px" alt="errr" />
              <div className="mx-2 ">
                {" "}
                address <br />
                Hno.163 Ambika Vihar near PHC Gole Gujral, Talab Tillo, Jammu,
                Jammu and Kashmir 180002{" "}
              </div>
            </div>
            {/* <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center">
              <img src={phone_call} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                phone <br />
                749-861-2751{" "}
              </div>
            </div> */}
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={mail} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress : team  <br />
                team.sharvafoundation@gmail.com{" "}
                
              </div>
            </div>
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={handshake} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress : manager<br />
                {" "}
                managersharvafoundation@gmail.com 
              </div>
            </div>
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={hr} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress : hr <br />
                 hr.sharvafoundation@gmail.com
              </div>
            </div>
          </div>
          <div className="footer_section_2 d-flex row">
            <div className="footer_2 d-flex col justify-content-evenly ">
              <div className="for_mobile_view">
                <div className="my_account">
                  <h5>OUR INITIATIVES</h5>
                  <ul>
                    <li>food for cause</li>
                    <li>strive with pride</li>
                    <li>give her wings to fly</li>
                    <li>project green</li>
                    <li>blood donation</li>
                  </ul>
                </div>
                <div className="main_Feature ">
                  <h5>QUICK LINKS </h5>
                  <ul>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Our Initiatives</li>
                    <li>Contact Us</li>
                    <li>Become a Volenteer</li>
                    <li>Donate Now</li>
                  </ul>
                </div>
              </div>
              <div className="be_the_first">
                <h5>OUR VISION</h5>
                <p>
                  We make a living by what we get, but we make a life by what we
                  give” These Words define the very energy that flows through
                  the heart of Sharva foundation. We here at Sharva Foundation
                  believe in building a community through giving. Our young
                  minds and passion for this is what strives us towards giving
                  the best! Although young, we look forward to do small things
                  with great love.
                </p>{" "}
              </div>
            </div>
            <div className="line"></div>
            <div className="credit d-flex col justify-content-evenly   ">
              <div className="cards_image">
                © Copyrights 2020 | sharvafoundation.org
              </div>
              <div className="socials">
                <img src={instagram} alt="" />
                <img src={instagram} alt="" />
                <img src={instagram} alt="" />
                <img src={instagram} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

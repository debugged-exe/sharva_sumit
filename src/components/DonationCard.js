import React from "react";
import carousal_image1 from "./images/1.jpg";
import gallery_img_4 from "./images/gallery_img_4.jpg";
import gallery_img_2 from "./images/gallery_img_2.jpg";
import gallery_img_3 from "./images/gallery_img_3.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const DonationCard = (props) => {
  
  return (
    
    <div className="donation_background ">
      
      <div className="gradient_for_donation_card">
        <h1 className="text-white">Our Recent Causes to Serve Better</h1>
        <div className="text-white about_donation">
          Making society a better place to live in is neither a one-day task nor
          an individual’s job. Well, it is not impossible too but we, Sharva
          Foundation, need all the resources that we can garner to continue our
          constant efforts. The ongoing projects reflect our commitment towards
          the causes that need urgent or intense efforts. Give us a helping hand
          to make a real impact in the real world!
        </div>
       
                <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerclassName="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListclassName="custom-dot-list-style"
  itemclassName="carousel-item-padding-40-px"
>
   <div className="card bg-transparent">
                  <img
                    src={gallery_img_2}
                    className="card-img-top"
                    alt={carousal_image1}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      rupees 1 campaign
                    </h5>
                    <p className="card-text text-white">
                      have you ever heard of the proverb "little drops make the
                      mighty ocean"? we believe that if evn only one rupee
                      contribution is made by a large mass , it can help us to
                      proactively offer help for any caouse or tragedies due to
                      an uncalled situation
                    </p>
                    <button className="btn button">donate now</button>
                  </div>
                </div>
                <div className="card bg-transparent">
                  <img
                    src={gallery_img_2}
                    className="card-img-top"
                    alt={carousal_image1}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      rupees 1 campaign
                    </h5>
                    <p className="card-text text-white">
                      have you ever heard of the proverb "little drops make the
                      mighty ocean"? we believe that if evn only one rupee
                      contribution is made by a large mass , it can help us to
                      proactively offer help for any caouse or tragedies due to
                      an uncalled situation
                    </p>
                    <button className="btn button">donate now</button>
                  </div>
                </div> <div className="card bg-transparent">
                  <img
                    src={gallery_img_2}
                    className="card-img-top"
                    alt={carousal_image1}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      rupees 1 campaign
                    </h5>
                    <p className="card-text text-white">
                      have you ever heard of the proverb "little drops make the
                      mighty ocean"? we believe that if evn only one rupee
                      contribution is made by a large mass , it can help us to
                      proactively offer help for any caouse or tragedies due to
                      an uncalled situation
                    </p>
                    <button className="btn button">donate now</button>
                  </div>
                </div> <div className="card bg-transparent">
                  <img
                    src={gallery_img_2}
                    className="card-img-top"
                    alt={carousal_image1}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      rupees 1 campaign
                    </h5>
                    <p className="card-text text-white">
                      have you ever heard of the proverb "little drops make the
                      mighty ocean"? we believe that if evn only one rupee
                      contribution is made by a large mass , it can help us to
                      proactively offer help for any caouse or tragedies due to
                      an uncalled situation
                    </p>
                    <button className="btn button">donate now</button>
                  </div>
                </div> <div className="card bg-transparent">
                  <img
                    src={gallery_img_2}
                    className="card-img-top"
                    alt={carousal_image1}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      rupees 1 campaign
                    </h5>
                    <p className="card-text text-white">
                      have you ever heard of the proverb "little drops make the
                      mighty ocean"? we believe that if evn only one rupee
                      contribution is made by a large mass , it can help us to
                      proactively offer help for any caouse or tragedies due to
                      an uncalled situation
                    </p>
                    <button className="btn button">donate now</button>
                  </div>
                </div> <div className="card bg-transparent">
                  <img
                    src={gallery_img_2}
                    className="card-img-top"
                    alt={carousal_image1}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      rupees 1 campaign
                    </h5>
                    <p className="card-text text-white">
                      have you ever heard of the proverb "little drops make the
                      mighty ocean"? we believe that if evn only one rupee
                      contribution is made by a large mass , it can help us to
                      proactively offer help for any caouse or tragedies due to
                      an uncalled situation
                    </p>
                    <button className="btn button">donate now</button>
                  </div>
                </div>
</Carousel>;
      </div>
    </div>
  );
};

export default DonationCard;

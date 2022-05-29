import React from "react";
import carousal_image1 from "./images/1.jpg";
import donation_card_1 from "./images/donation_card_1.png";
import donation_card_2 from "./images/donation_card_2.png";
import donation_card_3 from "./images/donation_card_3.png";
import donation_card_4 from "./images/donation_card_4.png";
import donation_card_5 from "./images/donation_card_5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const DonationCard = (props) => {
  return (
    <div className="donation_background ">
      <div className="gradient_for_donation_card">
        <h1 className="text-yellow ">Our Recent Causes to Serve Better</h1>
        <div className="title text-white">
          Making society a better place to live in is neither a one-day task nor
          an individual’s job. Well, it is not impossible too but we, Sharva
          Foundation, need all the resources that we can garner to continue our
          constant efforts. The ongoing projects reflect our commitment towards
          the causes that need urgent or intense efforts. Give us a helping hand
          to make a real impact in the real world!
        </div>
        <div className="text-white about_donation">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={4000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="card bg-transparent">
              <img
                src={donation_card_1}
                className="card-img-top"
                alt={carousal_image1}
              />
              <div className="card-body">
                <h5 className="card-title text-white"> rupees 1 campaign</h5>
                <p className="card-text text-white">
                  have you ever heard of the proverb "little drops make the
                  mighty ocean"? we believe that if evn only one rupee
                  contribution is made by a large mass , it can help us to
                  proactively offer help for any caouse or tragedies due to an
                  uncalled situation
                </p>
              </div>
              <button className="rounded btn button text-white">donate now</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_2}
                className="card-img-top"
                alt={carousal_image1}
              />
              <div className="card-body">
                <h5 className="card-title text-white"> Strive With Pride</h5>
                <p className="card-text text-white">
                  our intiatives helps the transgender community with basic
                  necessities. Sharva Foundation's aim is not to provide only
                  tangible items but to encourage society as a whole to be
                  inclusive of transgenders, who are ofter excluded from the
                  social landscape
                </p>
              </div>
              <button className="rounded btn button text-white">donate now</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_3}
                className="card-img-top"
                alt={carousal_image1}
              />
              <div className="card-body">
                <h5 className="card-title text-white"> As Free As a Bird</h5>
                <p className="card-text text-white">
                  Mensturation is a biological process and females , from
                  puberty till menopause , have no control over it. With this
                  initiative, we provide thress months, six months, or a yearly
                  stock of sanitary napkins to girls who struggle to maintain
                  mensturation hygiene due to financial challenges or less
                  awareness
                </p>
              </div>
              <button className="rounded btn button text-white">donate now</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_4}
                className="card-img-top"
                alt={carousal_image1}
              />
              <div className="card-body">
                <h5 className="card-title text-white"> Food For Cause</h5>
                <p className="card-text text-white">
                  Food is teh most basic necessity and still, a large population
                  sleeps hungry and wakes up malnutrition. Since the inception
                  of this campaign, our voluenteers have completed 100+ food
                  drives where we served cooded and packed meals to the needy.
                </p>
              </div>
              <button className="rounded btn button text-white">donate now</button>
            </div>
            <div className="card bg-transparent">
              <img
                src={donation_card_5}
                className="card-img-top"
                alt={carousal_image1}
              />
              <div className="card-body">
                <h5 className="card-title text-white">
                  {" "}
                  Give her Winfs To Fly
                </h5>
                <p className="card-text text-white">
                  Mensturation is a biological process and females , from
                  puberty till menopause , have no control over it. With this
                  initiative, we provide thress months, six months, or a yearly
                  stock of sanitary napkins to girls who struggle to maintain
                  mensturation hygiene due to financial challenges or less
                  awareness
                </p>
              </div>
              <button className="rounded btn button text-white">donate now</button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

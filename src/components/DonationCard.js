import React from "react";
import carousal_image1 from "./images/1.jpg";
import gallery_img_4 from "./images/gallery_img_4.jpg";
import gallery_img_2 from "./images/gallery_img_2.jpg";
import gallery_img_3 from "./images/gallery_img_3.jpg";

const DonationCard = () => {
  return (
    <div className="donation_background ">
      {" "}
      <div className="gradient_for_donation_card">
      <h4 className="text-white">event donation</h4>
      <h1 className="text-white">Our Recent Causes to Serve Better</h1>
        <div
          id="carouselExampleDark"
          class="carousel  slide"
          data-bs-ride="carousel"> 

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div className="image_carousel_box ">
                <div class="card bg-transparent" >
                  <img src={gallery_img_2} class="card-img-top" alt={carousal_image1} />
                  <div class="card-body">
                    <h5 class="card-title text-white">Card title</h5>
                    <p class="card-text text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    
                  </div>
                </div>
                  <div class="card bg-transparent" >
                    <img src={carousal_image1} class="card-img-top" alt={carousal_image1} />
                    <div class="card-body">
                      <h5 class="card-title text-white">Card title</h5>
                      <p class="card-text text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      
                    </div>
                  </div>
                  <div class="card bg-transparent" >
                    <img src={gallery_img_3} class="card-img-top" alt={carousal_image1} />
                    <div class="card-body">
                      <h5 class="card-title text-white">Card title</h5>
                      <p class="card-text text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      
                    </div>
                  </div>
              </div>
              
            </div>
            <div class="carousel-item " data-bs-interval="5000">
              <div className="image_carousel_box ">
                <div class="card bg-transparent" >
                  <img src={gallery_img_4} class="card-img-top"  />
                  <div class="card-body bg-transparent">
                    <h5 class="card-title text-white">Card title</h5>
                    <p class="card-text text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    
                  </div>
                 
                </div>
                  <div class="card bg-transparent" >
                    <img src={carousal_image1} class="card-img-top" alt={carousal_image1} />
                    <div class="card-body">
                      <h5 class="card-title text-white">Card title</h5>
                      <p class="card-text text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      
                    </div>
                  </div>
                  <div class="card bg-transparent" >
                    <img src={gallery_img_2} class="card-img-top" alt={carousal_image1} />
                    <div class="card-body">
                      <h5 class="card-title text-white">Card title</h5>
                      <p class="card-text text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      
                    </div>
                  </div>
              </div>
              
            </div>
            <div class="carousel-item " data-bs-interval="5000">
              <div className="image_carousel_box ">
                <div class="card bg-transparent" >
                  <img src={gallery_img_3} class="card-img-top" alt={carousal_image1} />
                  <div class="card-body">
                    <h5 class="card-title text-white">Card title</h5>
                    <p class="card-text text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    
                  </div>
                </div>
                  <div class="card bg-transparent" >
                    <img src={carousal_image1} class="card-img-top" alt={carousal_image1} />
                    <div class="card-body">
                      <h5 class="card-title text-white">Card title</h5>
                      <p class="card-text text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      
                    </div>
                  </div>
                  <div class="card bg-transparent" >
                    <img src={gallery_img_2} class="card-img-top" alt={carousal_image1} />
                    <div class="card-body">
                      <h5 class="card-title text-white">Card title</h5>
                      <p class="card-text text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      
                    </div>
                  </div>
              </div>
              
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

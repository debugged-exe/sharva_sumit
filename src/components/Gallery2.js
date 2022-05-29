import React from 'react'
import gallery_img_1 from "./images/gallery_img_1.jpg";
import gallery_img_2 from "./images/gallery_img_2.jpg";
import gallery_img_3 from "./images/gallery_img_3.jpg";
import gallery_img_4 from "./images/gallery_img_4.jpg";
const Gallery2 = () => {
  return (
    <div>
     <div className="gallery_heading  ">
        <h5 className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet.
        </h5>
        <h1 className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet consectetur
        </h1>
      </div>

    <div class="gallery">
        <div class="gallery__column">
            <a href="https://unsplash.com/@jeka_fe"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_1} alt="Portrait by Jessica Felicio" class="gallery__image"/>
                  
                </figure>
            </a>
    
            <a href="https://unsplash.com/@oladimeg"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_3} alt="Portrait by Oladimeji Odunsi" class="gallery__image"/>
                    
                </figure>
            </a>
            <a href="https://unsplash.com/@von_co"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_2} alt="Portrait by Ivana Cajina" class="gallery__image"/>
                   
                </figure>
            </a>
    
           
        </div>
        
        <div class="gallery__column">
            <a href="https://unsplash.com/@noahbuscher"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_2} alt="Portrait by Noah Buscher" class="gallery__image"/>
                 
                </figure>
            </a>
            
            <a href="https://unsplash.com/@von_co"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_4} alt="Portrait by Ivana Cajina" class="gallery__image"/>
                   
                </figure>
            </a>
            <a href="https://unsplash.com/@von_co"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_3} alt="Portrait by Ivana Cajina" class="gallery__image"/>
                   
                </figure>
            </a>
           
        </div>
        
        <div class="gallery__column">
            <a href="https://unsplash.com/@marilezhava"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_3} alt="Portrait by Mari Lezhava" class="gallery__image"/>
                   
                </figure>
            </a>
            
            <a href="https://unsplash.com/@ethanhaddox"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_1} alt="Portrait by Ethan Haddox" class="gallery__image"/>
                    
                </figure>
            </a>
            <a href="https://unsplash.com/@von_co"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_2} alt="Portrait by Ivana Cajina" class="gallery__image"/>
                   
                </figure>
            </a>
          
        </div>
        
        <div class="gallery__column">
            <a href="https://unsplash.com/@frxgui"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_2} alt="Portrait by Guilian Fremaux" class="gallery__image"/>
                    
                </figure>
            </a>
    
            <a href="https://unsplash.com/@majestical_jasmin"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_4} alt="Portrait by Jasmin Chew" class="gallery__image"/>
                    
                </figure>
            </a>
            <a href="https://unsplash.com/@von_co"  class="gallery__link">
                <figure class="gallery__thumb">
                    <img src={gallery_img_3} alt="Portrait by Ivana Cajina" class="gallery__image"/>
                   
                </figure>
            </a>
            
        </div>
    </div></div>
  )
}

export default Gallery2
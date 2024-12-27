import React from "react";
import testCSS from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from 'swiper/modules'
import signature from "../../assets/signature-2.png";

const Testimonials = () => {
  return (
    <div className={`${testCSS.testimonials_wrapper} section`} id="testimonials">
      <div className={testCSS.test_image}></div>
      <div className={testCSS.test_content}>
        <Swiper 
          loop={true}
          autoplay={{
            delay:2000
          }}  
          modules={[Autoplay]}
          speed={2000}
        >
          <SwiperSlide>
            <div className={testCSS.test_content_text}>
              <div className={testCSS.test_rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                dicta, maxime accusantium incidunt magni id.
              </p>

              <div className={testCSS.test_profile}>
                <h2>Nishan Says</h2>
                <img src={signature} alt="signature" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={testCSS.test_content_text}>
              <div className={testCSS.test_rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                dicta, maxime accusantium incidunt magni id.
              </p>

              <div className={testCSS.test_profile}>
                <h2>Bruce Banner</h2>
                <img src={signature} alt="signature" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

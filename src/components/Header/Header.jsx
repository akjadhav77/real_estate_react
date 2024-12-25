import React from "react";
import headerCSS from "./Header.module.css";

import headerslide1 from "./../../assets/Slide01.jpg";
import headerslide2 from "./../../assets/Slide02.jpg";
import headerslide3 from "./../../assets/Slide03.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <div className={headerCSS.header_wrapper}>
      <Swiper
        speed={1500}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className={headerCSS.headerSlide}>
            <img src={headerslide1} alt="header-slide" />
            <div className={headerCSS.header_content}>
              <small>Choice Around The World</small>
              <h1>
                Modern Houses <br /> and Hotels
              </h1>
              <button>
                All Projects <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={headerCSS.headerSlide}>
            <img src={headerslide2} alt="header-slide" />
            <div className={headerCSS.header_content}>
              <small>Choice Around The World</small>
              <h1>
                Real Estate <br /> Innovations
              </h1>
              <button>
                All Projects <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;

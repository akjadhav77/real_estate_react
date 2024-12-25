import React from "react";
import aboutCSS from "./About.module.css";
import aboutImage from '../../assets/about.png'

const About = () => {
  return (
    <div className={`${aboutCSS.about_wrapper} section`} id="about">
      <div className={aboutCSS.about_card}>
        <div className={aboutCSS.about_card_content}>
          <h2>Our Mission Is <br /> Design & Develop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at,
            necessitatibus adipisci nesciunt.
          </p>
          <button>About Us <i className="ri-arrow-right-up-line"></i></button>
        </div>
        <div className={aboutCSS.about_card_image}>
          <img src={aboutImage} alt="about-background" />
        </div>
      </div>
      <div className={aboutCSS.about_content}>
        <div className={aboutCSS.about_card_info}>
          <h3>20k <span>Clients</span> </h3>
          <div className={aboutCSS.line}></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, alias.</p>
        </div>
        <div className={aboutCSS.about_card_info}>
          <h3>138 <span>Projects</span> </h3>
          <div className={aboutCSS.line}></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, alias.</p>
        </div>
        <div className={aboutCSS.about_card_info}>
          <h3>15k <span>Sales</span> </h3>
          <div className={aboutCSS.line}></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, alias.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

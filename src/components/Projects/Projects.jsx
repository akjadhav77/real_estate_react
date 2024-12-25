import React from "react";
import projectCSS from "./Projects.module.css";
import projectImg1 from '../../assets/Project.jpg'
import projectImg2 from '../../assets/Project2.jpg'
import projectImg3 from '../../assets/Project3.jpg'
import projectImg4 from '../../assets/Project4.jpg'

const Projects = () => {
  return (
    <div className={`${projectCSS.project_wrapper} section`}>
      <h2>HomeDown Projects</h2>
      <div className={projectCSS.project_cards}>
        <div className={projectCSS.project_card}>
            <img src={projectImg1} alt="" />
            <div className={projectCSS.content}>
                <h3>Design Corner</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, assumenda.</p>
            </div>
        </div>
        <div className={projectCSS.project_card}>
            <img src={projectImg2} alt="" />
            <div className={projectCSS.content}>
                <h3>KOZY FORTESS</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, assumenda.</p>
            </div>
        </div>
        <div className={projectCSS.project_card}>
            <img src={projectImg3} alt="" />
            <div className={projectCSS.content}>
                <h3>Dream House</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, assumenda.</p>
            </div>
        </div>
        <div className={projectCSS.project_card}>
            <img src={projectImg4} alt="" />
            <div className={projectCSS.content}>
                <h3>Modern Apartment</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, assumenda.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

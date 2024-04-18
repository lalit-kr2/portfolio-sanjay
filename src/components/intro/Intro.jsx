import React from "react";
import "./intro.css";
import Me from "../../assets/3d.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sanjay Maurya</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">SEO (Search Engine Optimization)</div>
              <div className="i-title-item">SMO (Social Media Optimization)</div>
              <div className="i-title-item">ORM (Online Reputation Management)</div>
              <div className="i-title-item">Analytics and Google Search console</div>
              <div className="i-title-item">Local SEO And ADS</div>
            </div>
          </div>
          <div className="i-desc">
          Goal-focused individual seeking a leadership role to apply management, leadership and motivational skills when overseeing a team of professionals and working toward a common goal to increase productivity.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img"/>
      </div>
    </div>
  );
};

export default Intro;

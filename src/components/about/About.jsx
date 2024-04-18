import React, { useContext, useEffect, useState } from "react";
import "./about.css";
import { ThemeContext } from "../../context";
import Code from "../../assets/code.png";
import Tools from "../../assets/tools.png";
import CV from "../../assets/Sanjay-CV.pdf";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [url, setUrl] = useState("");

  useEffect(() => {
    const cu = window.location.href;
    setUrl(cu);
  }, []);

  const skills = [
    {
      id: 1,
      name: "Website Implementation",
    },
    {
      id: 2,
      name: "Content optimization",
    },
    {
      id: 3,
      name: "Backlink Strategies",
    },
    {
      id: 4,
      name: "Competitor Analysis",
    },
    {
      id: 5,
      name: "Website Health Check",
    },
    {
      id: 6,
      name: "Monitor Technical SEO Changes",
    },
    {
      id: 7,
      name: "Canonicalization issue checking",
    },
    {
      id: 8,
      name: "URL Structure",
    },
    {
      id: 9,
      name: "Google Tag manager",
    },
    {
      id: 10,
      name: "Keyword Research",
    },
    {
      id: 11,
      name: "Link buiding Strategy",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "SEO (Search Engine Optimization)",
    },
    {
      id: 2,
      name: "SMO (Social Media Optimization)",
    },
    {
      id: 3,
      name: "ORM (Online Reputation Management)",
    },
    {
      id: 4,
      name: "Content Marketing",
    },
    {
      id: 6,
      name: "PPC (Pay-Per-Click)",
    },
    {
      id: 7,
      name: "PPC (Pay-Per-Click)",
    },
    {
      id: 8,
      name: "Analytics and Google Search console",
    },
    {
      id: 9,
      name: "E-commerce Marketing",
    },
    {
      id: 10,
      name: "Email Marketing",
    },
    {
      id: 11,
      name: " inside sales SEO",
    },
  ];

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/5474037/pexels-photo-5474037.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          For Five Years, I worked as a Digital Marketing SEO, SMO ORM, Ads and Team Lead.
        </p>
        <p className="a-desc">
          I'm a digital marketer and SEO expert with over 5 years of experience.
          I've helped businesses in the IT manufacturing and selling sectors
          grow by boosting website traffic and sales through SEO, Google
          Adwords, and social media marketing. My specialties include e-commerce
          marketing and brand building. I stay updated with the latest digital
          marketing trends and always bring a positive attitude and teamworkto
          every project.
        </p>
        <p className="a-desc-mobile">
        I'm a seasoned digital marketer and SEO specialist, with 5+ years of experience. I've empowered IT businesses through SEO, AdWords, and social media strategies, specializing in e-commerce and brand development, staying abreast of industry trends.
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className={`a-award-title-ts ${!darkMode && "light-title"}`}>
              <img
                src={Code}
                alt=""
                className={`skill-img ${!darkMode && "light-img"}`}
              />
              Technical Skills
            </h4>
            <span className="a-award-desc">
              <div className="a-skill-items">
                {skills.map((item) => (
                  <p
                    className={`a-skill-item ${
                      !darkMode && "light-skill-item"
                    }`}
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </span>
          </div>
        </div>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className={`a-award-title-dms ${!darkMode && "light-title"}`}>
              <img
                src={Tools}
                alt=""
                className={`skill-img ${!darkMode && "light-img"}`}
              />
              Digital Marketing Skill
            </h4>
            <span className="a-award-desc">
              <div className="a-skill-items">
                {tools.map((item) => (
                  <p
                    className={`a-skill-item ${
                      !darkMode && "light-skill-item"
                    }`}
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </span>
          </div>
        </div>
          <a href={CV} download="Sanjay-CV.pdf">
            <div className="a-resume">My Résumé</div>
          </a>
      </div>
    </div>
  );
};

export default About;

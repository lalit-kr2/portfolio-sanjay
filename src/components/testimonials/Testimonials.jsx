import React, { useContext, useEffect, useState } from "react";
import "./testimonials.css";
import { ThemeContext } from "../../context";
import Pic1 from "../../assets/jaizib.jpeg";
import Pic2 from "../../assets/ritik.jpg";
import Pic3 from "../../assets/sakshi.jpg";
import Pic4 from "../../assets/lalit.jpg";

const Testimonials = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const data = [
    {
      id: 1,
      name: "Lalit Kumar",
      image: Pic4,
      message:
        "Sanjay's expertise in digital marketing is truly commendable. His profound understanding of SEO, SMO, and PPC strategies has been pivotal in our projects' success. Sanjay's insights into online marketing trends and his ability to tailor strategies to our business needs have significantly boosted our online presence and revenue. His collaborative approach and dedication to delivering results make him an invaluable member of our team. I highly recommend Sanjay for his exceptional skills in digital marketing.",
    },
    {
      id: 2,
      name: "Jaizib Zaidi",
      image: Pic1,
      message:
        "Sanjay's expertise in digital marketing and SEO brings a fresh perspective to our projects. His deep understanding of online strategies has been invaluable in optimizing our web presence and driving traffic to our platforms. Sanjay's positive attitude and collaborative approach make him a pleasure to work with. I highly recommend Sanjay for his outstanding contributions in enhancing our online visibility and driving business growth.",
    },
    {
      id: 3,
      name: "Ritik Pathak",
      image: Pic2,
      message:
        "Sanjay's guidance and expertise in digital marketing have been instrumental in my professional development. His insights into SEO and online advertising have broadened my understanding and improved my skills as a developer. Sanjay's patient guidance and clear communication style make complex concepts easy to grasp. I'm grateful for Sanjay's mentorship and highly recommend him to anyone seeking to expand their knowledge in digital marketing and SEO.",
    },
    {
      id: 4,
      name: "Sakshi Gupta",
      image: Pic3,
      message:
        "Collaborating with Sanjay has been a rewarding experience for our QA team. His knowledge of SEO and digital marketing principles ensures that our products meet the highest standards of visibility and performance. Sanjay's dedication to delivering top-notch solutions and his receptiveness to feedback make him an asset to any project. I confidently endorse Sanjay for his unwavering commitment to achieving online success for our projects.",
    },
  ];

  const [active, setActive] = useState(0);

  const [autoplay, setAutoplay] = useState(0);
  const max = data.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const toggleAutoPlay = () => setAutoplay(!autoplay);

  const nextOne = () =>
    active < max - 1 ? setActive(active + 1) : setActive(0);

  const prevOne = () =>
    active > 0 ? setActive(active - 1) : setActive(max - 1);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: data.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    data.map((item, index) => (
      <div
        className={"middle each-slide"}
        key={item.id}
        style={{ backgroundColor: `${!darkMode ? "lavender" : "crimson"}` }}
      >
        <div className="tm-message">
          <i>{item.message}</i>
        </div>
        <div className="tm-person">
          <img className="person-img" src={item.image} alt="" />
          <h2 className="name">{item.name}</h2>
          <p className="job-profile">{item.jobProfile}</p>
          <p className="company">{item.company}</p>
        </div>
      </div>
    ));

  const renderDots = () =>
    data.map((silde, index) => (
      <li
        className={isActive(index) + " dots"}
        key={index}
        style={{ color: darkMode ? "#FFF" : "#222" }}
      >
        <button
          onClick={() => setActive(index)}
          className={`dot-button ${
            darkMode ? "dark-mode-dot" : "light-mode-dot"
          }`}
        >
          <span className="dot">&#9679;</span>
        </button>
      </li>
    ));

  const renderPlayStop = () =>
    autoplay ? (
      <svg
        fill={darkMode ? "#FFF" : "#222"}
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ) : (
      <svg
        fill={darkMode ? "#FFF" : "#222"}
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    );

  const renderArrows = () => (
    <>
      <button
        type="button"
        className="tm-arrows prev"
        onClick={() => prevOne()}
      >
        <svg
          fill={darkMode ? "#FFF" : "#222"}
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        className="tm-arrows next"
        onClick={() => nextOne()}
      >
        <svg
          fill={darkMode ? "#FFF" : "#222"}
          height="50"
          viewBox="0 0 24 24"
          width="50"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </>
  );

  return (
    <div className="slider">
      <h1 className="tm-heading">Testimonials</h1>
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>
      {/* <button type="button" className="toggle-play" onClick={toggleAutoPlay}>
        {renderPlayStop()}
      </button> */}
    </div>
  );
};

export default Testimonials;

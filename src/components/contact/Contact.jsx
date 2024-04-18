import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKeyId = import.meta.env.VITE_PUBLIC_KEY;
  
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKeyId
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 844-771-2923
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              singh.sanjay991@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Shiv Durga Vihar, Faridabad, Haryana
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> <br/>Send a message. Always prepared to ignite digital growth.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="username"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              name="message"
              id=""
              rows="5"
              placeholder="Message"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
            ></textarea>
            <button>Submit</button>
          </form>
          {done && (
            <p className="done">
              Thank you... I'll try to contact you asap {":)"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

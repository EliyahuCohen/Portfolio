import React, { useState } from "react";
import "./footer.scss";

import { images } from "../../constants/index";
import AppWrap from "../../wrapper/AppWrap";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    //getting the info from the changing place
    //every oine will have a name and a value
    setFormData({ ...formData, [name]: value });
    //this is some advence react we are saying
    //leave the rest the same but the one with the name of the one we are changing , change it to the new value
  };
  const handleSubmit = async (e) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then((res) => {
      setIsFormSubmited(true);
      setLoading(false);
    });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:eliyahutrab@gmail.com" className="p-text">
            eliyahutrab@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+972 585669183" className="p-text">
            +972 585669183
          </a>
        </div>
      </div>

      {!isFormSubmited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div className="textplace">
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              onChange={handleChangeInput}
              value={message}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "  Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch 🙏</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact", "", "white");

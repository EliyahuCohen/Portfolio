import { BsTwitter, BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import "./index.scss";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div datacontect="LinkedIn">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eliyahu-cohen-b3499716a/"
          className="app__flex"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
      <div datacontect="Github">
        <a
          target="_blank"
          href="https://github.com/eliyahucohen"
          className="app__flex"
        >
          <FaGithub className="icon" />
        </a>
      </div>
      <div datacontect="WhatsApp">
        <a
          target="_blank"
          href="https://wa.me/+972585669183"
          className="app__flex"
        >
          <BsWhatsapp className="icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

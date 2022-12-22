import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import AppWrap from "../../wrapper/AppWrap";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="design">
      <div className="app__header app__flex ">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__header-info"
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.9 }}
            className="app__header-badge"
          >
            <div className="badge-cmp app__flex">
              <span style={{ fontSize: "30px" }}> 👋</span>
              <div style={{ marginLeft: "20ox" }}>
                <p className="p-text" style={{ fontSize: 20 }}>
                  Hello , I am
                </p>
                <h1 className="head-text" style={{ fontSize: "40px" }}>
                  Eliyahu
                </h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="job-title">Fullstack Web Developer</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.6, delayChildren: 0.6 }}
          className="app__header-img"
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          ></motion.div>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.6 }}
        >
          <img className="heroImage" src={images.hero} alt="hero images" />
        </motion.div>
        <motion.div
          variants={scaleVarients}
          whileInView={scaleVarients.whileInView}
          className="app__header-circles"
        >
          {[images.sass, images.react, images.node].map((circle, index) => {
            return (
              <motion.div
                whileInView={scaleVarients.whileInView}
                className="circle-cmp app__flex"
                key={`circle=${index}`}
              >
                <img src={circle} alt="circle" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");

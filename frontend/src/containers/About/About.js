import React, { useEffect, useState } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [aboutInfo, setAboutInfo] = useState("");

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const content = '*[_type == "content"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
    client.fetch(content).then((data) => {
      setAboutInfo(data[0]);
    });
  }, []);
  return (
    <div className="design">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, type: "tween" }}
        style={{
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto",
          marginBottom: "6rem",
        }}
      >
        <h2 className="head-text" style={{ marginBottom: "2rem" }}>
          <span>{aboutInfo.header}</span>
        </h2>
        <h2>{aboutInfo.info}</h2>
      </motion.div>
      <h2 className="head-text" style={{ fontSize: 45 }}>
        I Know That <span>Good Design</span>
        <br />
        means<span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={urlFor(about.imgUrl)}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />

              <h3 style={{ marginTop: "20px" }}>{about.title}</h3>
              <p className="p-text" style={{ marginTop: "10px" }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");

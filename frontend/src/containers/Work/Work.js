import React, { useEffect, useState } from "react";
import "./work.scss";
import AppWrap from "../../wrapper/AppWrap";
import { client, urlFor } from "../../client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [categories, setCategories] = useState([]);

  var tempArray = [];
  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
      data.forEach((single) => {
        single.tags.forEach((single1) => {
          tempArray.push(single1);
        });
      });
      tempArray = [...new Set(tempArray)];
      tempArray = tempArray.filter((one) => one != "All");
      tempArray.push("All");
      setCategories(tempArray);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      // here we are telling the card to go down ,lower the opacity and also come back to the initial state after 500ms
      if (item === "All") {
        setFilterWork(works);
        setActiveFilter("All");
        setAnimateCard([{ y: 0, opacity: 1 }]);
        return;
      }
      setFilterWork(
        works.filter(
          (item1) =>
            item1.tags[0] === item ||
            item1.tags[1] === item ||
            item1.tags[2] === item ||
            item1.tags[3] === item ||
            item1.tags[4] === item
        )
      );
      setActiveFilter(item);
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  return (
    <div className="wrapper-content">
      <h2 className="head-text" style={{ fontSize: 45 }}>
        My Creative <span>Portfolio {""}</span>Section
      </h2>

      <div className="app__work-filter">
        {categories.map((item, index) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delayChildren: 0.5 }}
              key={index}
              className={`app__work-filter-item app__flex p-text ${
                item == activeFilter ? "item-active" : ""
              }`}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-protfolio"
      >
        {filterWork.map((work, index) => {
          const { projectLink, codeLink } = work;
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt="work item" />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: "10px" }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(Work, "work");

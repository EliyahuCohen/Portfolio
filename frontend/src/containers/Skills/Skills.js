import React, { useEffect, useState } from "react";
import "./skills.scss";
import AppWrap from "../../wrapper/AppWrap";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  const experienceQuery = "*[_type == 'experiences']";
  const skillsQuery = "*[_type == 'skills']";
  useEffect(() => {
    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text" style={{ fontSize: "45px" }}>
        Skills & Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p
                  className="p-text"
                  style={{ fontSize: "15px", marginTop: "0.5rem" }}
                >
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience &&
            experience?.map((work, index) => {
              return (
                <motion.div
                  className="app__skills-exp-item"
                  key={work.year + index}
                >
                  <div className="app__skills-exp-year">
                    <motion.p
                      className="bold-text"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      {work.year}
                    </motion.p>
                  </div>
                  <motion.div className="app__skills-exp-works">
                    {work?.works.map((single) => {
                      return (
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.7 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={single.name}
                          key={single.name}
                        >
                          <h4 className="bold-text">{single.name}</h4>
                          <p className="p-text">{single.company}</p>
                          <p style={{ color: "#555" }}>{single.desc}</p>
                          <motion.div
                            className="saperator"
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");

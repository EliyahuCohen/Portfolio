import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => {
        return (
          <a
            style={active === item ? { backgroundColor: "#313bac" } : {}}
            className="app__navigation-dot"
            key={item + index}
            href={`#${item}`}
          ></a>
        );
      })}
    </div>
  );
};

export default NavigationDots;

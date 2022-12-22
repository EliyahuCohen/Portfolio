import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";
// high order component
const AppWrap = (Components, idName, classNames, color) =>
  function HOC() {
    return (
      <div
        style={{ backgroundColor: color }}
        id={idName}
        className={`app__container ${classNames}`}
      >
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Components />

          <div className="copyright">
            <p className="p-text">2022 Eliyahu</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

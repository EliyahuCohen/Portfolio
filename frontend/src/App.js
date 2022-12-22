import React from "react";
import { Navbar } from "./components/index";
import { Header, Footer, About, Skills, Work } from "./containers/index";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;

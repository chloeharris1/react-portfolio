import React from "react";
import "./App.css";
// import "./styles/Fonts.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

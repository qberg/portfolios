import React from "react";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white min-h-screen font-inter">
      <div className="max-w-4xl w-11/12 mx-auto gap-y-4">
        <Header />
        <Intro />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;

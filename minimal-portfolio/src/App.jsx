import React from "react";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="m-auto grid max-w-4xl grid-rows-[auto_1fr_auto] gap-y-4">
      <Intro />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;

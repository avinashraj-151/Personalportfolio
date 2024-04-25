import React from "react";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Education from "./Component/Education";
import { Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
function App() {
  return (
    <div className="flex md:flex-row">
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects";

const MainSection = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"about"} />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default MainSection;

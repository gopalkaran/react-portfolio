import About from "./About";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects";
import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const MainSection = ({ aboutRef, experienceRef, projectRef }) => {
  return (
    // <Routes>
    //   <Route path="/" element={<Navigate to={"about"} />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/experience" element={<Experience />} />
    //   <Route path="/projects" element={<Projects />} />
    // </Routes>
    <Box>
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <Projects projectRef={projectRef} />
    </Box>
  );
};

export default MainSection;

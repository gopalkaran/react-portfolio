import About from "./About";
import Experience from "./Experience/Experience.jsx";
import Projects from "./Projects";
import { Box } from "@mui/material";

const MainSection = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Navigate to={"about"} />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/experience" element={<Experience />} />
    //   <Route path="/projects" element={<Projects />} />
    // </Routes>
    <Box>
      <About />
      <Experience />
      <Projects />
    </Box>
  );
};

export default MainSection;

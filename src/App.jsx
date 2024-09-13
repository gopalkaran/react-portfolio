import { Grid, ThemeProvider } from "@mui/material";
import "./App.css";
import SidePanel from "./components/SidePanel";
import MainSection from "./components/MainSection/routes";
import theme from "./utils/theme";
import { useState, useEffect, useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="gradient-box"
        sx={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      >
        <Grid item xs={12} md={6}>
          <SidePanel
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectRef={projectRef}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxHeight: "100vh",
            overflow: { xs: "none", md: "auto" },
            display: { xs: "flex", md: "block" },
            justifyContent: { xs: "center", md: "normal" },
          }}
        >
          <MainSection
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectRef={projectRef}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

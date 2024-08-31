import { Grid, ThemeProvider } from "@mui/material";
import "./App.css";
import SidePanel from "./components/SidePanel";
import MainSection from "./components/MainSection/routes";
import theme from "./utils/theme";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
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

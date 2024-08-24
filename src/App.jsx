import { Grid, ThemeProvider } from "@mui/material";
import "./App.css";
import SidePanel from "./components/SidePanel";
import MainSection from "./components/MainSection/routes";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <SidePanel />
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
          <MainSection />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

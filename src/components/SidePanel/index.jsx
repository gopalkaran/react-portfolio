import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import VerticalNavbar from "./VerticalNavbar";
import { SVGComponent, SocialData } from "../../utils/SvgComponent";
import theme from "../../utils/theme";

// eslint-disable-next-line react/prop-types
const SidePanel = ({ aboutRef, experienceRef, projectRef }) => {
  return (
    <Box sx={{ p: { xs: 9, md: "6rem" }, width: "90%" }}>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.primary.light,
          marginBottom: "1rem",
          fontWeight: "700",
        }}
      >
        Gopal Karan
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.light,
          marginBottom: "1rem",
        }}
      >
        Frontend Engineer
      </Typography>
      <Typography component="p" sx={{ marginBottom: "3rem" }}>
        I build pixel-perfect, engaging, and accessible digital experiences.
      </Typography>
      <VerticalNavbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectRef={projectRef}
      />
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          marginTop: "3rem",
          "& svg:hover": {
            fill: (theme) => theme.palette.primary.light,
          },
        }}
      >
        {SocialData.map((item) => {
          return (
            <Link key={item.heading} to={item.url} target="_blank">
              <SVGComponent
                fill={item.fill}
                path={item.path}
                height={item.height}
                width={item.width}
                viewBox={item.viewBox}
              />
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SidePanel;

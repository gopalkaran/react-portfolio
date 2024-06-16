import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { LinkSVG, SVGComponent } from "../../../utils/SvgComponent";
import { Link } from "react-router-dom";
import { projectsData } from "./projectData";

const Projects = () => {
  return (
    <List sx={{ width: "80%", py: 10, gap: 2 }}>
      {projectsData?.map((project) => {
        return (
          <ListItem
            key={project.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 3,
              p: 2,
              width: "100%",
              height: "auto",
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.main,
                cursor: "pointer",
                "& .MuiListItemIcon-root": {
                  transform: "translateX(5px) translateY(-5px)",
                  transition: "transform 0.3s",
                },
                "& .MuiListItemText-root": {
                  color: (theme) => theme.palette.primary.contrastText,
                },
                "& svg": {
                  fill: (theme) => theme.palette.primary.contrastText,
                },
              },
            }}
            component={Link}
            target="_blank"
            to={project.url}
          >
            <Box
              component={"img"}
              src={project.logo}
              height={70}
              width={120}
              sx={{ border: "2px solid #aaa", borderRadius: 1, marginTop: 1 }}
            ></Box>
            <Stack direction={"column"} gap={1}>
              <Stack direction={"row"}>
                <ListItemText
                  primary={project.projectName}
                  sx={{
                    flex: "0 1 auto",
                    color: (theme) => theme.palette.primary.light,
                  }}
                />
                <ListItemIcon sx={{ alignItems: "center" }}>
                  <SVGComponent {...LinkSVG} />
                </ListItemIcon>
              </Stack>
              <Typography
                component={"p"}
                fontSize={12}
                textAlign={"justify"}
                color={(theme) => theme.palette.secondary.light}
              >
                {project.projectDescription}
              </Typography>
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={1}
                sx={{
                  "& .MuiBox-root": {
                    color: (theme) => theme.palette.primary.contrastText,
                    backgroundColor: "rgba(45, 212, 191, .1)",
                    borderRadius: 5,
                    fontSize: 12,
                    p: 1,
                  },
                }}
              >
                {project?.techStack?.map((item) => {
                  return <Box key={item}>{item}</Box>;
                })}
              </Stack>
            </Stack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Projects;

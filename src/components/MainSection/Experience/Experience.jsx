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
import React from "react";
import { timeLineData } from "./experienceData";

// eslint-disable-next-line react/prop-types
const Experience = ({ experienceRef }) => {
  return (
    <div ref={experienceRef}>
      <List
        sx={{
          width: { xs: "90%", sm: "80%" },
          py: 10,
          gap: 2,
          m: "0 auto",
        }}
      >
        {timeLineData?.map((timeLineEvent) => {
          return (
            <ListItem
              key={timeLineEvent.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 3,
                p: 2,
                mb: 2,
                width: "100%",
                height: "auto",
                textDecoration: "none",
                color: "inherit",
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
              to={timeLineEvent.url}
            >
              <Box
                component={"img"}
                src={timeLineEvent.logo}
                sx={{
                  border: "2px solid #aaa",
                  borderRadius: 1,
                  marginTop: 1,
                  maxWidth: 70,
                  width: "20%",
                  height: "auto",
                }}
              ></Box>
              <Stack direction={"column"} gap={1}>
                <Stack direction={"column"} gap={0.2}>
                  <Stack direction={"row"}>
                    <ListItemText
                      primary={timeLineEvent.designation}
                      sx={{
                        flex: "0 1 auto",
                        color: (theme) => theme.palette.primary.light,
                      }}
                    />
                    <ListItemIcon sx={{ alignItems: "center" }}>
                      <SVGComponent {...LinkSVG} />
                    </ListItemIcon>
                  </Stack>
                  <Typography component={"p"} fontSize={12}>
                    {timeLineEvent.companyName}
                  </Typography>
                  <Typography component={"p"} fontSize={11}>
                    {timeLineEvent.duration}
                  </Typography>
                </Stack>
                <List sx={{ listStyleType: "disc", pl: "16px" }}>
                  {timeLineEvent.responsibility?.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem sx={{ display: "list-item" }}>
                        <ListItemText
                          primary={item.text}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: 12,
                              color: (theme) => theme.palette.secondary.light,
                              textAlign: "justify",
                            },
                          }}
                        />
                      </ListItem>
                    </React.Fragment>
                  ))}
                </List>
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
                  {/* {timeLineEvent?.techStack?.map((item) => {
                  return <Box key={item}>{item}</Box>;
                })} */}
                </Stack>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Experience;

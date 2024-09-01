import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import {
  connectMessage,
  experienceText,
  expertiseArray,
  myApproachText,
} from "./aboutData";

const headingStyle = {
  mt: 3,
  fontWeight: 700,
  color: (theme) => theme.palette.primary.light,
};

const BasicInfo = () => {
  return (
    <Typography
      component="p"
      sx={{
        "& span": {
          color: (theme) => theme.palette.primary.light,
        },
      }}
    >
      {`Hi there! I'm a passionate and dedicated `}
      <Typography component="span">
        {`React Developer with 2.8 years of experience `}
      </Typography>
      {`in building dynamic and responsive web applications. My journey in web
      development began with a fascination for creating intuitive user
      interfaces and seamless user experiences. Over the years, I've honed my
      skills in `}
      <Typography component="span">
        {`JavaScript, TypeScript, React, Redux `}
      </Typography>
      {`and a suite of modern web technologies, transforming complex problems
      into elegant, efficient solutions.`}
    </Typography>
  );
};

// eslint-disable-next-line react/prop-types
const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef}>
      <Stack sx={{ width: "80%", textAlign: "justify", py: 12, m: "0 auto" }}>
        <BasicInfo />
        <Typography component="p" sx={headingStyle}>
          My Expertise
        </Typography>
        <List sx={{ listStyleType: "disc", pl: "16px" }}>
          {expertiseArray?.map((item) => (
            <React.Fragment key={item.heading}>
              <ListItem
                sx={{
                  display: "list-item",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: 16,
                    textAlign: "justify",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: (theme) => theme.palette.primary.light,
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography component="span">{item.text}</Typography>
                </Typography>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Typography component="p" sx={headingStyle}>
          My Approach
        </Typography>
        <Typography component="p">{myApproachText}</Typography>
        <Typography component="p" sx={headingStyle}>
          Projects & Experience
        </Typography>
        <Typography component="p">{experienceText}</Typography>
        <Typography component="p" sx={headingStyle}>
          {`Let's Connect`}
        </Typography>
        <Typography component="p">{connectMessage}</Typography>
      </Stack>
    </div>
  );
};

export default About;

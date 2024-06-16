import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Webileapps from "../../../assets/timeline/webileapps.png";
import theme from "../../../utils/theme";

const timeLineData = [
  {
    id: 1,
    duration: "Jun, 2021 - Present",
    logo: Webileapps,
    designation: "Associate Software Engineer",
    responsibility: [
      {
        id: "s1",
        text: "Developed responsive User Interface, API integration and complex frontend logic using Javascript, Typescript, React, Redux, React Router, Material UI, Yup and Formik libraries.",
      },
      {
        id: "s2",
        text: "Collaborated with the backend team, design team, testing team to design, build, test and improve the product using agile methodologies and tools such as JIRA to track the progress of the sprint tasks and bug resolutions.",
      },
      {
        id: "s3",
        text: "Assigned tasks to new-joinees, and guided for their tasks, reviewed their code.",
      },
    ],
  },
  {
    id: 2,
    duration: "Feb, 2021 - May, 2021",
    logo: Webileapps,
    designation: "Software Engineer Trainee",
  },
];

const Experience = () => {
  return (
    <Timeline
      position="alternate"
      sx={{
        width: "80%",
        py: 12,
      }}
    >
      {timeLineData.map((timeLine, index) => {
        return (
          <TimelineItem key={timeLine.id}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color={theme.palette.primary.light}
                sx={{ marginTop: "20px" }}
              >
                {timeLine.duration}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "white" }}>
                <Box
                  component={"img"}
                  src={timeLine.logo}
                  sx={{ width: "40px", borderRadius: "10px" }}
                ></Box>
              </TimelineDot>
              {index < timeLineData?.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body1" component="h1">
                  {timeLine.designation}
                </Typography>
                <List sx={{ listStyleType: "disc", pl: "16px" }}>
                  {timeLine.responsibility?.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem sx={{ display: "list-item" }}>
                        <ListItemText
                          primary={item.text}
                          sx={{ "& .MuiTypography-root": { fontSize: 12 } }}
                        />
                      </ListItem>
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default Experience;

import { Box, List, ListItem, styled } from "@mui/material";
import { useState } from "react";

const ABOUT = "about";
const EXPERIENCE = "experience";
const PROJECT = "projects";

const NavData = [
  { heading: "About", section: ABOUT },
  { heading: "Experience", section: EXPERIENCE },
  { heading: "Projects", section: PROJECT },
];

// const CustomLink = styled(NavLink)(({ theme }) => ({
//   textDecoration: "none",
//   width: "100%",
//   display: "flex",
//   alignItems: "center",
//   "&:hover": {
//     "& .line": {
//       width: "70px",
//       backgroundColor: theme.palette.primary.light,
//     },
//     "& .text": {
//       color: theme.palette.primary.light,
//       left: "50px",
//       transition: "left 0.3s",
//     },
//   },
//   "&.active": {
//     "& .line": {
//       width: "70px",
//       backgroundColor: theme.palette.primary.light,
//     },
//     "& .text": {
//       color: theme.palette.primary.light,
//       left: "50px",
//       transition: "left 0.3s",
//     },
//   },
// }));

const CustomListItem = styled(ListItem)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    "& .line": {
      width: "70px",
      backgroundColor: theme.palette.primary.light,
    },
    "& .text": {
      color: theme.palette.primary.light,
      left: "50px",
      transition: "left 0.3s",
    },
  },
  "&.active": {
    "& .line": {
      width: "70px",
      backgroundColor: theme.palette.primary.light,
    },
    "& .text": {
      color: theme.palette.primary.light,
      left: "50px",
      transition: "left 0.3s",
    },
  },
}));

const TextLine = styled(Box)(({ theme }) => ({
  display: "inline-block",
  left: "0px",
  width: "35px",
  height: "1px",
  transition: "width 0.3s",
  backgroundColor: theme.palette.secondary.light,
  marginRight: "15px",
}));

const ListItemText = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.light,
  width: "100%",
  left: "10px",
  textTransform: "uppercase",
  fontSize: ".75rem",
  fontWeight: 700,
  letterSpacing: ".1em",
}));

// eslint-disable-next-line react/prop-types
const VerticalNavbar = ({ aboutRef, experienceRef, projectRef }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  function moveTo(to, index) {
    handleListItemClick(index);
    switch (to) {
      case ABOUT: {
        // eslint-disable-next-line react/prop-types
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case EXPERIENCE: {
        // eslint-disable-next-line react/prop-types
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case PROJECT: {
        // eslint-disable-next-line react/prop-types
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      default:
        return;
    }
  }

  return (
    <List>
      {NavData.map((text, index) => (
        <CustomListItem
          key={text.section}
          sx={{ paddingLeft: 0 }}
          className={selectedIndex === index ? "active" : ""}
          onClick={() => moveTo(text.section, index)}
        >
          {/* <CustomLink
            to={`/${text.section}`}
            onClick={() => moveTo(text.section)}
          > */}
          <TextLine component="span" className="line"></TextLine>
          <ListItemText component="span" className="text">
            {text.heading}
          </ListItemText>
          {/* </CustomLink> */}
        </CustomListItem>
      ))}
    </List>
  );
};

export default VerticalNavbar;

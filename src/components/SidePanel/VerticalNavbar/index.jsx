import { Box, List, ListItem, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const ABOUT = "About";
const EXPERIENCE = "Experience";
const PROJECT = "Projects";

const NavData = [
  { heading: ABOUT, path: "/about" },
  { heading: EXPERIENCE, path: "/experience" },
  { heading: PROJECT, path: "/projects" },
];

const CustomLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  display: "flex",
  alignItems: "center",
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

// const CustomListItem = styled(ListItemText)(({ theme }) => ({
//     position: 'relative',
//     color: theme.palette.secondary.light,
//     width: '100%',
//     // left: '10px',
//     "&:hover": {
//         color: theme.palette.primary.light,
//         // left: '90px',
//         transition: 'left 0.3s',
//     },
//     '&::before': {
//         content: "''",
//         position: 'absolute',
//         left: '0px',
//         top: '50%',
//         width: '40px',
//         height: '1px',
//         transition: 'width 0.3s',
//         backgroundColor: theme.palette.secondary.light,
//         marginRight: '60px',
//     },
//     '&:hover::before': {
//         width: '80px',
//         backgroundColor: theme.palette.primary.light,
//     },
// }))

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

const VerticalNavbar = () => {
  function moveTo(to) {
    switch (to) {
      case ABOUT: {
        window["scrollTo"]({ top: 600, behavior: "smooth" });
        break;
      }
      case EXPERIENCE: {
        window["scrollTo"]({ top: 1850, behavior: "smooth" });
        break;
      }
      case PROJECT: {
        window["scrollTo"]({ top: 2950, behavior: "smooth" });
        break;
      }
      default:
        return;
    }
  }

  return (
    <List>
      {NavData.map((text) => (
        <ListItem key={text.heading} sx={{ paddingLeft: 0 }}>
          <CustomLink to={text.path} onClick={() => moveTo(text.heading)}>
            {/* <CustomListItem primary={text.heading} /> */}
            <TextLine component="span" className="line"></TextLine>
            <ListItemText component="span" className="text">
              {text.heading}
            </ListItemText>
          </CustomLink>
        </ListItem>
      ))}
    </List>
  );
};

export default VerticalNavbar;

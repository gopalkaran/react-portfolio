import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: 'rgb(226 232 240 / 1)',
            main: 'rgb(15 23 42 / 1)',
            dark: '#002884',
            contrastText: 'rgb(94 234 212 / 1)',
        },
        secondary: {
            light: 'rgb(148 163 184 / 1)',
            main: 'rgb(255 255 255 / 0.1)',
            dark: '#ba000d',
        },
    },
});

export default theme;
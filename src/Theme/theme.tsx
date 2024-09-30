import { createTheme } from "@mui/material";
import InterRegular from "./fonts/Inter-Regular.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8A00E5",
    },
    secondary: {
      main: "#1B1534",
    },
    success: {
      main: "#347841",
    },
    warning: {
      main: "#E2D000",
    },
    error: {
      main: "#DA1E28",
    },
    text: {
      primary: "#1B1534",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1500,
      xl: 2500,
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      color: "#e9ebef",
      fontSize: "120px",
      fontWeight: 700,
    },
    h2: {
      color: "#353535",
      fontSize: "40px",
      lineHeight: "22px",
      fontWeight: 700,
    },
    h3: {
      color: "#353535",
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 700,
    },
    h4: {
      color: "#353535",
      fontSize: "24px",
      lineHeight: "29px",
      fontWeight: 700,
    },
    h5: {
      color: "#353535",
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 700,
    },
    h6: {
      color: "#353535",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "normal",
    },
    subtitle1: {
      color: "#353535",
      fontSize: "36px",
      lineHeight: "43px",
      fontWeight: 700,
    },
    subtitle2: {
      color: "#353535",
      fontSize: "10px",
      lineHeight: "normal",
      fontWeight: 700,
    },
    body1: {
      color: "#353535",
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 400,
    },
    body2: {
      color: "#353535",
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 400,
    },
    overline: {
      color: "#353535",
      fontSize: "12px",
      lineHeight: "22px",
      fontWeight: 400,
    },
    caption: {
      color: "#353535",
      fontSize: "8px",
      lineHeight: "22px",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: url(${InterRegular}) format('truetype');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
    },
  },
});

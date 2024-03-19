import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font family
    fontSize: 16, // Default font size in pixels
    fontWeightRegular: 400, // Default font weight for regular text
    fontWeightBold: 700, // Default font weight for bold text
    h1: {
      fontSize: "2.5rem", // Font size for h1
      fontWeight: 700, // Font weight for h1
    },
    h2: {
      fontSize: "2rem", // Font size for h2
      fontWeight: 700, // Font weight for h2
    },
    h3: {
      fontSize: "1.5rem", // Font size for h3
      fontWeight: 700, // Font weight for h3
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    // Add custom breakpoints if needed
  },
});

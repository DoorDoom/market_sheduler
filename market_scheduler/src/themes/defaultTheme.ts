"use client";

import { Button } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       default: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       default?: string;
//     };
//   }
// }

// const CustomButton = styled(Button)(({ theme }) => ({
//   color: theme.status.default,
//   "&.Mui-checked": {
//     color: theme.status.default,
//   },
// }));

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 30,
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#8D7FC7",
      main: "#8D7FC7",
      dark: "#8D7FC7",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Circe Rounded",
  },
});

export default theme;

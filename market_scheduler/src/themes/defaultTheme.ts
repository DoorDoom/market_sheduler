import { BorderColor } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#fff",
          borderRadius: 8,
          fontSize: 14,
        },
        notchedOutline: {
          borderColor: "#ECECEC",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 36,
          color: "#79747F",
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            fontSize: 12,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
          borderRadius: 20,
        },
        // .width.C8C5CD
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 12,
          color: "#79747F",
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

"use client";

import theme from "@/themes/defaultTheme";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

const CustomButton = ({ text, style, type, onClick }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={onClick}
        color={type ?? "primary"}
        className={style}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

type Props = {
  text: string;
  style?: string;
  type?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick: () => void;
};

export default CustomButton;

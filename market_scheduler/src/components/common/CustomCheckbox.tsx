"use client";

import theme from "@/themes/defaultTheme";
import { Checkbox, FormControlLabel, ThemeProvider } from "@mui/material";

const CustomCheckbox = ({ text, style, onClick }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={<Checkbox onClick={onClick} />}
        label={text}
        className={style}
      />
    </ThemeProvider>
  );
};

type Props = {
  text: string;
  style?: string;
  onClick: () => void;
};

export default CustomCheckbox;

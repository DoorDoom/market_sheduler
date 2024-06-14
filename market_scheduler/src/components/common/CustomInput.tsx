// "use server";

import theme from "@/themes/defaultTheme";
import { InputAdornment, TextField, ThemeProvider } from "@mui/material";

import { ChangeEvent } from "react";
import { IconButton } from "@mui/material";
import EyeOpen from "../../../public/images/EyeOpen.svg";
import EyeOpenSlash from "../../../public/images/EyeOpenSlash.svg";
import React from "react";

const CustomInput = ({ placeholder, style, onChange, type }: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        className={style}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {type === "password" ? (
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOpenSlash className="h-5 w-5" />
                  ) : (
                    <EyeOpen className="h-5 w-5" />
                  )}
                </IconButton>
              ) : (
                <></>
              )}
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

type Props = {
  placeholder: string;
  style?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: "password";
};

export default CustomInput;

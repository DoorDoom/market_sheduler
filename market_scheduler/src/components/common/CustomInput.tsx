// "use server";

import {
  InputAdornment,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";

import { NodeElement } from "rc-tree/lib/interface";
import { ChangeEvent } from "react";

const CustomInput = ({ placeholder, style, onChange, suffix }: Props) => {
  return (
    <FormControl className={style} variant="filled">
      <InputLabel htmlFor="filled-adornment-password">{placeholder}</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        onChange={onChange}
        // type={showPassword ? 'text' : 'password'}
        // endAdornment={
        // <InputAdornment position="end">
        //   <IconButton
        //     aria-label="toggle password visibility"
        //     onClick={handleClickShowPassword}
        //     onMouseDown={handleMouseDownPassword}
        //     edge="end"
        //   >
        //     {showPassword ? <VisibilityOff /> : <Visibility />}
        //   </IconButton>
        // </InputAdornment>
        // }
      />
    </FormControl>
  );
};

type Props = {
  placeholder: string;
  style?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  suffix?: NodeElement;
};

export default CustomInput;

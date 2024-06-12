// "use server";

import { Input } from "antd";
import { NodeElement } from "rc-tree/lib/interface";
import { ChangeEvent } from "react";

const CustomInput = ({ placeholder, style, onChange, suffix }: Props) => {
  return (
    <Input
      className={style}
      placeholder={placeholder}
      onChange={onChange}
      suffix={suffix}
    />
  );
};

type Props = {
  placeholder: string;
  style?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  suffix?: NodeElement;
};

export default CustomInput;

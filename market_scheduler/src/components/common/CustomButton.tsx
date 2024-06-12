// "use server";

import { Button } from "antd";

const CustomButton = ({ text, style, type, onClick }: Props) => {
  return (
    <Button type={type} className={style} onClick={onClick}>
      {text}
    </Button>
  );
};

type Props = {
  text: string;
  style?: string;
  type?: "text" | "primary" | "link" | "default";
  onClick: () => void;
};

export default CustomButton;

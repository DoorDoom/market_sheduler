"use client";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconView from "./common/IconView";
import Link from "next/link";
import CustomButton from "./common/CustomButton";
import CustomInput from "./common/CustomInput";
import { useEffect, useState } from "react";

const RegistrationForm = () => {
  const [form, setForm] = useState<string>("");

  useEffect(() => console.log(form), [form]);
  return (
    <div className="mt-1 w-[86%] flex flex-col gap-3">
      <CustomInput
        style="w-full h-9"
        placeholder="E-mail"
        onChange={(event) => setForm(event.target.value)}
      />
      {/* <Input
        className="w-full h-9"
        placeholder="Пароль"
        // onChange={(event) => setForm(event.target.value)}
        suffix={<IconView svgPath="EyeOpen" style="h-4 w-4" />}
      /> */}
      <FormControlLabel
        control={<Checkbox />}
        className="ml-1 mt-1"
        label="Запомнить меня"
      />
      <CustomButton
        text="Войти"
        style="mt-6 w-85 h-12 text-lg"
        type="primary"
        onClick={() => setForm("text")}
      />
      <div className="w-full flex justify-between">
        <Link href="#" onClick={() => console.log("text")}>
          Я забыл пароль
        </Link>
        <Link href="#">Войти как тренер</Link>
      </div>
    </div>
  );
};

// type Props = {
//   svgPath: string;
//   style: string;
// };

export default RegistrationForm;

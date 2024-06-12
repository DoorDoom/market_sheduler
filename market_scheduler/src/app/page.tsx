import RegistrationForm from "@/components/RegistrationForm";
import IconView from "@/components/common/IconView";
import Link from "next/link";

export default function Login() {
  return (
    <main className="content-centered bg-[#FDFDFF]">
      <div className="flex flex-col items-center">
        <IconView svgPath="Logomark_1_" style="h-20 w-20" />
        <h1 className="block mt-8 text-[#323854]">
          Вход в <b>Sirius Future</b>
        </h1>
        <RegistrationForm />
        <div className="mt-16 flex flex-col justify-center items-center">
          <p>Нет аккаунта?</p>
          <Link href="#">Зарегистрироваться</Link>
        </div>
      </div>
      <div className="absolute bottom-8">RU EN</div>
    </main>
  );
}

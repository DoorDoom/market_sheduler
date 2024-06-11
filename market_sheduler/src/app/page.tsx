import IconView from "@/components/IconView";

import { Input } from "antd";

export default function Home() {
  return (
    <main className="content-centered">
      <div className="flex flex-col items-center">
        <IconView svgPath="Logomark_1_" style="h-20 w-20" />
        <h1 className="block mt-8 text-[#323854]">
          Вход в <b>Sirius Future</b>
        </h1>
        <div className="mt-1 w-[86%]">
          <Input className="w-full" />
        </div>
      </div>
      <div className="absolute bottom-0">RU EN</div>
    </main>
  );
}

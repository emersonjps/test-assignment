import Image from "next/image";

import logo from "@/assets/img/header/logo 1.png";
import item1 from "@/assets/img/header/Frame 1484578055.svg";
import item2 from "@/assets/img/header/norton-antivirus-logo 1.svg";

export default function Header() {
  return (
    <section className="my_header flex justify-between pt-8 pb-8 pl-32 pr-32">
      <div>
        <Image alt="logo" src={logo} width={192} height={36} />
      </div>

      <div className="flex gap-8">
        <Image alt="item" src={item1} width={88} height={83} />
        <Image alt="item" src={item2} width={82} height={83} />
      </div>
    </section>
  );
}

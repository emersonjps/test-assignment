import lock from "@/assets/img/footer/lock (7) 1.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="my_footer flex">
      <div className="flex gap-1">
        <p>Copyright (c) 2023 |</p>
        <p className="ml-1">Clarifionsupport@clarifion.com</p>
      </div>

      <div className="flex gap-1">
        <Image
        alt="lock"
        src={lock}
        width={16}
        height={16}
        />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  );
}

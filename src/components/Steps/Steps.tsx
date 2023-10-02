import Image from "next/image";

import tick from "@/assets/img/tick-circle.svg";
import Ellipse_green from "@/assets/img/Ellipse 47.svg";
import Ellipse_blue from "@/assets/img/Ellipse 48.svg";
import Ellipse_blue_empity from "@/assets/img/Ellipse 49.svg";

export default function Steps() {
  return (
    <section className="flex max-w-full justify-center gap-10 mt-10">
      <div className="flex items-center">
        <div className="flex flex-row mr-5">
          <Image
            alt="Ellipse_green"
            src={Ellipse_green}
            width={40}
            height={40}
          />{" "}
          <Image
            className="-ml-6"
            alt="tick"
            src={tick}
            width={16}
            height={16}
          />
        </div>
        <p className="text_steps">Step 1 : Cart Review</p>
      </div>

      <div className="flex items-center">
        <div className="flex flex-row mr-5">
          <Image
            alt="Ellipse_green"
            src={Ellipse_green}
            width={40}
            height={40}
          />{" "}
          <Image
            className="-ml-6"
            alt="tick"
            src={tick}
            width={16}
            height={16}
          />
        </div>
        <p className="text_steps">Step 2 : Checkout</p>
      </div>

      <div className="flex items-center">
        <div className="flex flex-row mr-5">
          <Image alt="Ellipse_blue" src={Ellipse_blue} width={42} height={42} />{" "}
          <p className="-ml-5 mt-0.5 text-white">3</p>
        </div>
        <p className="text_steps font-bold">Step 3 : Special Offer</p>
      </div>

      <div className="flex items-center">
        <div className="flex flex-row mr-5">
          <Image
            alt="Ellipse_blue_empity"
            src={Ellipse_blue_empity}
            width={42}
            height={42}
          />{" "}
          <p className="text_steps -ml-5 mt-0.5 text_steps_blue">4</p>
        </div>
        <p className="text_steps">Step 4 : Confirmation</p>
      </div>
    </section>
  );
}

import Image from "next/image";

import fluent_checkmark from "@/assets/img/nav/fluent_checkmark-starburst-20-regular.svg";
import fluent_arrowfluent_arrow from "@/assets/img/nav/fluent_arrow-sync-checkmark-20-regular.svg";
import mdi_cards from "@/assets/img/nav/mdi_cards-heart-outline.svg";
import ph_truck from "@/assets/img/nav/ph_truck-light.svg";

import arrowleft from "@/assets/img/nav/Layer_1 (1).svg";
import arrowright from "@/assets/img/nav/Layer_1.svg";

export default function NavBar() {
  return (
    <nav className="my_nav flex justify-around items-center h-12">
      <Image
        className="my_nohidden"
        alt="arrowleft"
        src={arrowleft}
        width={22}
        height={22}
      />
      <div className="flex items-center">
        <Image
          className="mr-2"
          alt="fluent_checkmark"
          src={fluent_checkmark}
          width={22}
          height={22}
        />
        <p>30-DAY SATISFACTION GUARANTEE</p>
      </div>
      <Image
        className="my_nohidden rotate-180"
        alt="arrowright"
        src={arrowleft}
        width={22}
        height={22}
      />
      <div className="my_hidden flex items-center">
        <Image
          className="mr-2"
          alt="fluent_arrowfluent_arrow"
          src={fluent_arrowfluent_arrow}
          width={22}
          height={22}
        />{" "}
        <p>Free delivery on orders over $40.00</p>
      </div>
      <div className="my_hidden flex items-center">
        <Image
          className="mr-2"
          alt="mdi_cards"
          src={mdi_cards}
          width={22}
          height={22}
        />{" "}
        <p>50.000+ HAPPY CUSTOMERS</p>
      </div>
      <div className="my_hidden flex items-center">
        <Image
          className="mr-2"
          alt="ph_truck"
          src={ph_truck}
          width={22}
          height={22}
        />
        <p>100% Money Back Guarantee</p>
      </div>
    </nav>
  );
}

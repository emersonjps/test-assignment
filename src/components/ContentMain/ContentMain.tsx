import Image from "next/image";

import imgContet from "@/assets/img/image 4.png";
import profileUser from "@/assets/img/Rectangle 1127.png";
import stars from "@/assets/img/Stars.svg";
import verify from "@/assets/img/verify 1.svg";
import img1 from "@/assets/img/content2/image-removebg-preview (12) 1.png";
import point from "@/assets/img/content2/Group 1000001340.svg";

import arroyBlue from "@/assets/img/content2/tick-circle.svg";
import percente from "@/assets/img/content2/Group 1000004656 (1).svg";
import arrow_white from "@/assets/img/content2/Line 1.svg";
import lock from "@/assets/img/content2/lock (7) 1 (1).svg";
import visa from "@/assets/img/content2/visa (1).svg";
import shop_pay from "@/assets/img/content2/shop pay (1).svg";
import paypal from "@/assets/img/content2/paypal (1).svg";
import mastercard from "@/assets/img/content2/mastercard (1).svg";
import gpay from "@/assets/img/content2/gpay (1).svg";
import apple_pay from "@/assets/img/content2/apple pay (1).svg";
import amex from "@/assets/img/content2/amex (1).svg";
import satisfy from "@/assets/img/content2/image 6.png";

export default function ContentMain() {
  return (
    <article className="main flex">
      <section>
        <div>
          <Image alt="imgContet" src={imgContet} width={575} height={591} />
        </div>

        <section className="comment_user  p-6">
          <div className="flex gap-3 items-center mt-11">
            <Image alt="profileUser" src={profileUser} width={48} height={48} />
            <div>
              <Image alt="stars" src={stars} width={78} height={12} />
              <div className="flex items-center gap-2">
                <p className="style_manrope font-bold">Ken T.</p>
                <Image alt="verify" src={verify} width={16} height={16} />
                <p className="text_verify">Verified Customer</p>
              </div>
            </div>
          </div>
          <p className="typografia mt-4">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </section>
      </section>

      <section className="particion_main flex flex-col gap-8">
        <h1 className="title_section2">
          <span className="span_blue">ONE TIME ONLY</span> special price for 6
          extra Clarifion for only <span className="span_blue">$14 each</span>
          ($84.00 total!)
        </h1>

        <div className="flex">
          <Image
            className="retangulo mr-6"
            alt="img1"
            src={img1}
            width={134}
            height={134}
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex">
                <p className="font-bold style_manrope mr-24">
                  Clarifion Air Ionizer
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="price1">$180</p>
                <p className="price2">$84</p>
              </div>
            </div>
            <Image alt="stars" src={stars} width={90} height={12} />
            <div className="flex mt-2">
              <Image alt="point" src={point} width={16} height={16} />
              <p className="typografia">12 left in Stock</p>
            </div>
            <p className="text_info">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Image
              className="mr-3"
              alt="arrow"
              src={arroyBlue}
              width={22}
              height={22}
            />
            <p className="text1">
              Negative Ion Technology may{" "}
              <span className="text2">help with allergens</span>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3"
              alt="arrow"
              src={arroyBlue}
              width={22}
              height={22}
            />
            <p className="text1">
              Designed for <span className="text2">air rejuvenation</span>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3"
              alt="arrow"
              src={arroyBlue}
              width={22}
              height={22}
            />
            <p className="text1">
              <span className="text2">Perfect for every room</span> in all types
              of places.
            </p>
          </div>
        </div>

        <div className="particion_percente flex items-center  gap-4">
          <Image alt="percente" src={percente} width={32} height={32} />
          <p>
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for
            only <span>$14 Each</span>.
          </p>
        </div>

        <div className="btn_discount flex items-center">
          <div className="flex gap-5">
            Yes - Claim my discount
            <Image alt="arrow_white" src={arrow_white} width={16} height={16} />
          </div>
        </div>

        <div className="particion_cards flex items-center  gap-4">
          <p>Free shipping |</p>
          <Image
            className="-mr-3"
            alt="lock"
            src={lock}
            width={12}
            height={12}
          />
          <p>Secure 256-bit SSL encryption. |</p>

          <div className="flex items-center">
            <Image alt="visa" src={visa} width={24} height={14} />
            <Image alt="shop_pay" src={shop_pay} width={24} height={14} />
            <Image alt="paypal" src={paypal} width={24} height={14} />
            <Image alt="mastercard" src={mastercard} width={24} height={14} />
            <Image alt="gpay" src={gpay} width={24} height={14} />
            <Image alt="apple_pay" src={apple_pay} width={24} height={14} />
            <Image alt="amex" src={amex} width={24} height={14} />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <h1 className="no_thanks">No thanks, I don’t want this.</h1>
        </div>

        <div className="satisfy flex">
          <Image alt="satisfy" src={satisfy} width={88} height={88} />
          <p>
            If you are not completely thrilled with your Clarifion - We have a
            <span> 30 day satisfaction guarantee</span>. Please refer to our
            return policy at the bottom of the page for more details. Happy
            Shopping!
          </p>
        </div>
      </section>
    </article>
  );
}

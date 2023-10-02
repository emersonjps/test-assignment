import Image from "next/image";

import imgContet from "@/assets/img/image 4.png";
import profileUser from "@/assets/img/Rectangle 1127.png";
import stars from "@/assets/img/Stars.svg";
import verify from "@/assets/img/verify 1.svg";
import img1 from "@/assets/img/content2/image-removebg-preview (12) 1.png";
import point from "@/assets/img/content2/Group 1000001340.svg";

export default function ContentMain() {
  return (
    <article className="flex">
      <div>
        <div>
          <Image alt="imgContet" src={imgContet} width={575} height={591} />
        </div>

        <section className="comment_user  p-6">
          <div className="flex gap-3 items-center">
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
          <p className="typografia">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </section>
      </div>

      <section>
        <h1 className="title_section2">
          <span className="span_blue">ONE TIME ONLY</span> special price for 6
          extra Clarifion for only <span className="span_blue">$14 each</span>
          ($84.00 total!)
        </h1>

        <div className="flex">
          <Image alt="img1" src={img1} width={134} height={134} />
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <p className="font-bold style_manrope mr-24">
                Clarifion Air Ionizer
              </p>
              <p className="mr-2 price1">$180</p>
              <p className="price2">$84</p>
            </div>
            <Image alt="stars" src={stars} width={90} height={12} />
            <div className="flex mt-2">
              <Image alt="point" src={point} width={16} height={16} />
              <p className="typografia">12 left in Stock</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

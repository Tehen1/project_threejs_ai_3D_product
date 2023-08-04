import type { NextPage } from "next";
import EcommerceLandingPageLandingIco from "../components/ecommerce-landing-page-landing-ico";

const FrameComponent1: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1330px] overflow-hidden">
      <EcommerceLandingPageLandingIco />
      <img
        className="absolute top-[28px] left-[2586px] w-[768px] h-[1152px] object-cover"
        alt=""
        src="/ecommerce-landing-page-landing-page-electronics-informatique-2-1@2x.png"
      />
      <div className="absolute top-[28px] left-[19px] bg-white w-[801px] h-[1185px] overflow-hidden">
        <img
          className="absolute top-[33px] left-[33px] w-[768px] h-[1152px] object-cover"
          alt=""
          src="/ecommerce-landing-page-landing-page-electronics-informatique-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;

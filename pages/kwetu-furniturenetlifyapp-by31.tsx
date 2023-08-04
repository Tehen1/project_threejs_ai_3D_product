import type { NextPage } from "next";
import Head from "next/head";
import ShopCard from "../components/shop-card";

const KwetuFurniturenetlifyappBy3: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col py-8 pr-0 pl-8 box-border items-start justify-between min-h-[1820px] text-left text-lgi-2 text-dimgray-200 font-poppins">
      <div className="w-[960px] flex flex-row pt-0 px-0 pb-4 box-border items-center justify-between">
        <div className="flex flex-row items-start justify-start">
          <div className="relative font-semibold">Kwetu Furniture</div>
        </div>
        <div className="flex flex-row py-0 px-3 items-start justify-start gap-[23.64px] text-base">
          <div className="flex flex-row pt-px px-0 pb-0 items-start justify-start">
            <div className="relative uppercase">Home</div>
          </div>
          <div className="flex flex-row pt-px px-0 pb-0 items-start justify-start">
            <div className="relative uppercase">Shop</div>
          </div>
          <div className="w-[55.86px] flex flex-row pt-px px-0 pb-0 box-border items-start justify-start">
            <div className="relative uppercase">
              <span>{`Cart `}</span>
              <span className="text-tomato">0</span>
            </div>
          </div>
        </div>
      </div>
      <ShopCard />
      <div className="w-[960px] flex flex-row pt-px pb-0 pr-[426.7799987792969px] pl-[425.2200012207031px] box-border items-start justify-center text-center text-base">
        <div className="relative">Kwetu © 2022</div>
      </div>
    </div>
  );
};

export default KwetuFurniturenetlifyappBy3;

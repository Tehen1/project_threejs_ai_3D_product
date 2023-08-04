import type { NextPage } from "next";
import { memo } from "react";

const ElegantHomeContainer: NextPage = memo(() => {
  return (
    <div className="w-[358px] flex flex-col pt-[139.5500030517578px] px-0 pb-[139.54000854492188px] box-border items-start justify-center gap-[20px] z-[0] text-left text-13xl text-dimgray-200 font-poppins">
      <div className="w-[358px] flex flex-col items-start justify-start">
        <b className="relative">Home of elegant,</b>
        <b className="relative">stylish and affordable</b>
        <b className="relative">furniture</b>
      </div>
      <div className="rounded-md bg-tomato box-border w-[120px] flex flex-row py-[11px] pr-[26.139999389648438px] pl-[26.860000610351562px] items-start justify-center text-center text-[13.33px] text-white border-[1px] border-solid border-tomato">
        <div className="relative">Shop Now</div>
      </div>
    </div>
  );
});

export default ElegantHomeContainer;

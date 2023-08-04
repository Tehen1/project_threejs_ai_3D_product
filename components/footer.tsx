import type { NextPage } from "next";
import { memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterType = {
  dimensionCode?: string;
  dimensionCodeImageUrl?: string;

  /** Style props */
  propTop?: Property.Top;
};

const Footer: NextPage<FooterType> = memo(
  ({ dimensionCode, dimensionCodeImageUrl, propTop }) => {
    const divlocaleSelectorsContaineStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div
        className="absolute w-full top-[3187.16px] right-[0px] left-[0px] bg-whitesmoke-200 flex flex-row pt-0 pb-[33.59000015258789px] pr-[353.80999755859375px] pl-[353.79998779296875px] box-border items-start justify-center text-left text-mini text-darkslategray font-inter"
        style={divlocaleSelectorsContaineStyle}
      >
        <div className="flex flex-row pt-[0.20000000298023224px] pb-[0.009999081492424011px] pr-[0.0000152587890625px] pl-0 items-start justify-start gap-[8.39px]">
          <div className="relative rounded-sm bg-whitesmoke-100 w-[213px] h-[31.59px] max-w-[213px]">
            <div className="absolute top-[calc(50%_-_2.5px)] right-[10px] w-2 h-[5px] overflow-hidden flex flex-row pt-0 pb-[0.5999999046325684px] pr-[0.9000000953674316px] pl-0 box-border items-start justify-start">
              <img
                className="relative w-[7.1px] h-[4.4px]"
                alt=""
                src={dimensionCode}
              />
            </div>
            <div className="absolute w-[calc(100%_-_36px)] top-[calc(50%_-_11.99px)] right-[28px] left-[8px] overflow-hidden flex flex-row pt-0 pb-px pr-[54px] pl-0 box-border items-start justify-start">
              <div className="relative leading-[22px]">Germany (EUR €)</div>
            </div>
          </div>
          <div className="relative rounded-sm bg-whitesmoke-100 w-[95px] h-[31.59px] max-w-[95px]">
            <div className="absolute top-[calc(50%_-_2.5px)] right-[10px] w-2 h-[5px] overflow-hidden flex flex-row pt-0 pb-[0.5999999046325684px] pr-[0.9000000953674316px] pl-0 box-border items-start justify-start">
              <img
                className="relative w-[7.1px] h-[4.4px]"
                alt=""
                src={dimensionCodeImageUrl}
              />
            </div>
            <div className="absolute w-[calc(100%_-_36px)] top-[calc(50%_-_11.99px)] right-[28px] left-[8px] overflow-hidden flex flex-row pt-0 pb-px pr-2 pl-0 box-border items-start justify-start">
              <div className="relative leading-[22px]">English</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Footer;

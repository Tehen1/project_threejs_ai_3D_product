import type { NextPage } from "next";
import { memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type FilteredFormContainerType = {
  dimensionCode?: string;
  dimensionText?: string;

  /** Style props */
  propPadding?: Property.Padding;
  propBoxSizing?: Property.BoxSizing;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propWidth2?: Property.Width;
  propLeft1?: Property.Left;
};

const FilteredFormContainer: NextPage<FilteredFormContainerType> = memo(
  ({
    dimensionCode,
    dimensionText,
    propPadding,
    propBoxSizing,
    propWidth,
    propWidth1,
    propRight,
    propLeft,
    propWidth2,
    propLeft1,
  }) => {
    const stickyHeaderStyle: CSS.Properties = useMemo(() => {
      return {
        padding: propPadding,
        boxSizing: propBoxSizing,
      };
    }, [propPadding, propBoxSizing]);

    const headerStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const detailsModalDetailsButtStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth1,
        right: propRight,
      };
    }, [propWidth1, propRight]);

    const navListStyle: CSS.Properties = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    const divheaderIconsStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth2,
        left: propLeft1,
      };
    }, [propWidth2, propLeft1]);

    return (
      <div
        className="absolute w-full top-[80.88px] right-[0px] left-[0px] bg-whitesmoke-200 flex flex-row items-start justify-center text-left text-mini-7 text-darkslateblue-200 font-open-sans"
        style={stickyHeaderStyle}
      >
        <div
          className="relative w-[1024px] h-[140.84px] max-w-[1260px]"
          style={headerStyle}
        >
          <div
            className="absolute h-[calc(100%_-_94.65px)] w-[calc(100%_-_977.81px)] top-[25.78px] right-[925.31px] bottom-[68.87px] left-[52.5px] flex flex-row pt-[12.59000015258789px] pb-[12.599998474121094px] pr-[12.599998474121094px] pl-[12.59000015258789px] box-border items-center justify-center"
            style={detailsModalDetailsButtStyle}
          >
            <div className="w-[21px] h-[21px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <img
                className="relative w-[21px] h-[21px] overflow-hidden shrink-0"
                alt=""
                src={dimensionCode}
              />
            </div>
          </div>
          <div className="absolute top-[20px] left-[calc(50%_-_77.87px)] flex flex-row pt-[7.869999885559082px] pb-[7.880000114440918px] pr-[7.880000114440918px] pl-[7.869999885559082px] items-start justify-center">
            <img
              className="relative w-[140px] h-[42px] object-cover max-w-[140px]"
              alt=""
              src="/official-website-logo-9e4d0912e4674f62840ab0f55a8f8ab4png@2x.png"
            />
          </div>
          <div
            className="absolute top-[88.76px] left-[194.92px] flex flex-row flex-wrap items-start justify-center"
            style={navListStyle}
          >
            <div className="flex flex-row pt-[12.59000015258789px] pb-[12.490001678466797px] pr-[12.989999771118164px] pl-[12.600000381469727px] items-center justify-start">
              <div className="relative tracking-[0.63px] leading-[18.9px]">
                Shop
              </div>
            </div>
            <div className="flex flex-row pt-[12.59000015258789px] pb-[12.490001678466797px] pr-[12.270000457763672px] pl-[12.59000015258789px] items-center justify-start">
              <div className="relative tracking-[0.63px] leading-[18.9px]">
                FAQ's
              </div>
            </div>
            <div className="flex flex-row pt-[12.59000015258789px] pb-[12.490001678466797px] pr-[13.079998016357422px] pl-[12.59000015258789px] items-center justify-start">
              <div className="relative tracking-[0.63px] leading-[18.9px]">
                Shipping
              </div>
            </div>
            <div className="flex flex-row pt-[12.59000015258789px] pb-[12.490001678466797px] pr-[12.299999237060547px] pl-[12.59000015258789px] items-center justify-start">
              <div className="relative tracking-[0.63px] leading-[18.9px]">
                Track My Order
              </div>
            </div>
            <div className="flex flex-row pt-[12.59000015258789px] pb-[12.490001678466797px] pr-[12.189998626708984px] pl-[12.59000015258789px] items-center justify-start">
              <div className="relative tracking-[0.63px] leading-[18.9px]">
                Contact Us
              </div>
            </div>
            <div className="flex flex-row pt-[12.59000015258789px] pb-[12.490001678466797px] pr-[13.770000457763672px] pl-[12.59000015258789px] items-center justify-start">
              <div className="relative tracking-[0.63px] leading-[18.9px]">
                Become an Affiliate
              </div>
            </div>
          </div>
          <div
            className="absolute w-[calc(100%_-_990.41px)] top-[25.78px] right-[52.5px] left-[937.91px] flex flex-row items-start justify-center"
            style={divheaderIconsStyle}
          >
            <div className="self-stretch w-[46.19px] overflow-hidden shrink-0 flex flex-row pt-[13.626049995422363px] pb-[13.002482414245605px] pr-[12.481805801391602px] pl-[13.635778427124023px] box-border items-start justify-start">
              <img
                className="relative w-[20.07px] h-[19.56px]"
                alt=""
                src={dimensionText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FilteredFormContainer;

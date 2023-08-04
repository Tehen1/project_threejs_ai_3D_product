import type { NextPage } from "next";
import { memo } from "react";

const FrameComponent: NextPage = memo(() => {
  return (
    <div className="relative bg-white w-[2438px] h-[3808px] overflow-hidden" />
  );
});

export default FrameComponent;

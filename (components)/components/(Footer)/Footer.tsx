import Border from "@/(components)/(utility)/utility/Border";
import React from "react";
import Cta from "./Cta";
import FooterLists from "./FooterLists";
import VerticalBorder from "@/(components)/(utility)/utility/VerticalBorder";
import Pattern from "@/(components)/(utility)/utility/Pattern";
import FooterInstructions from "./FooterInstructions";

const Footer = () => {
  return (
    <div className="w-full">
      <Border />
      <Cta />
      <Border />
      <div className="container">
        <div className="grid h-full grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)] mx-7 md:mx-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 z-10 w-px">
              <VerticalBorder />
            </div>
          </div>
          <div className="inner-container">
            <FooterLists/>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 z-10 w-px">
              <VerticalBorder />
            </div>
          </div>
        </div>
      </div>
      <Border/>
      <FooterInstructions/>
    </div>
  );
};

export default Footer;

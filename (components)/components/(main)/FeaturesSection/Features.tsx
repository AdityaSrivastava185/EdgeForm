import React from "react";
import FeatureHeader from "./FeatureHeader";
import Pattern from "@/(components)/(utility)/utility/Pattern";
import VerticalBorder from "@/(components)/(utility)/utility/VerticalBorder";
import FeaturesGridCards from "./FeaturesGridCards";

const Features = () => {
  return (
    <div className="container">
      <div className="grid h-full grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)]">
        <div className="relative">
          <Pattern />
          <div className="absolute inset-y-0 left-0 z-10 w-px">
            <VerticalBorder />
          </div>
          <div className="absolute inset-y-0 right-0 z-10 w-px">
            <VerticalBorder />
          </div>
        </div>
        <div>
            <FeatureHeader/>
            <FeaturesGridCards/>
        </div>
        <div className="relative">
          <Pattern />

          <div className="absolute inset-y-0 left-0 z-10 w-px">
            <VerticalBorder />
          </div>

          <div className="absolute inset-y-0 right-0 z-10 w-px">
            <VerticalBorder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

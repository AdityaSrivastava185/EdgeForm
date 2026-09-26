import SectionHeader from "@/(components)/(utility)/utility/SectionHeader";
import React from "react";

const FeatureHeader = () => {
  return (
    <div className="inner-container">
      <SectionHeader
        title="The full-stack for building frontend applications... and the tools to simplify it"
        description="Everything you need to build, deploy, and scale frontend applications from static sites to complex web apps, all on one global network."
      />
    </div>
  );
};

export default FeatureHeader;

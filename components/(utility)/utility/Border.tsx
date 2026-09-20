import React from "react";

const Border = () => {
  return (
    <div className="w-full h-px mt-6">
      <svg
        className="block w-full h-full"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="#262626"
          strokeWidth="7"
          strokeDasharray="2 1"
        />
      </svg>
    </div>
  );
};

export default Border;

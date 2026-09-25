
import Pattern from "@/(components)/(utility)/utility/Pattern";
import VerticalBorder from "@/(components)/(utility)/utility/VerticalBorder";
import React from "react";

const Hero = () => {
  return (
    <div className="container h-svh">
      <div className="grid h-full grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)]">

        {/* LEFT BORDER-PATTERN DIV */}
        <div className="relative">

          {/* DOT PATTERN */}
          <Pattern/>
          {/* Left border */}
          <div className="absolute inset-y-0 left-0 z-10 w-px">
            <VerticalBorder />
          </div>

          {/* Right border */}
          <div className="absolute inset-y-0 right-0 z-10 w-px">
            <VerticalBorder />
          </div>
        </div>

        {/* CENTER */}
        <div className="p-7">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            ad consequuntur nesciunt dicta ipsa nobis provident expedita
            officiis quos doloremque, eos, possimus ea ex tempora! Quo fugiat
            qui eos velit quas odit recusandae ab ullam repellendus. Odit ipsa
            repellat, neque eligendi quaerat dolorem,
          </p>
        </div>

        {/* RIGHT BORDER-PATTERN DIV */}
        <div className="relative">

          {/* DOT PATTERN */}
          <Pattern/>

          {/* Left border */}
          <div className="absolute inset-y-0 left-0 z-10 w-px">
            <VerticalBorder />
          </div>

          {/* Right border */}
          <div className="absolute inset-y-0 right-0 z-10 w-px">
            <VerticalBorder />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
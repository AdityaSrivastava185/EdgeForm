import GridCards from "@/(components)/(utility)/utility/GridCards";
import HeroImage from "@/(components)/(utility)/utility/HeroImage";
import Pattern from "@/(components)/(utility)/utility/Pattern";
import SectionHeader from "@/(components)/(utility)/utility/SectionHeader";
import VerticalBorder from "@/(components)/(utility)/utility/VerticalBorder";
import FrontendBadge from "@/images/FrontendBadge";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    // Custom card for hero section
    <section className="container">
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

        <div className="flex flex-col items-center gap-10 inner-container">
          <div className="relative flex items-center justify-center h-36 w-72">
            <Pattern />
            <div className="flex items-center justify-center gap-2 border-1 border-[#ff5e1f] border-dashed rounded-md p-2 bg-[#ff5e1f]/5">
              <span>
                <FrontendBadge />
              </span>
              <p className="text-[#ff5e1f]">FRONTEND</p>
            </div>
          </div>
          <SectionHeader
            title="Deploy lightning-fast websites and web apps on Edgeform's global
              network."
            description="Bring any JavaScript framework or build tool to Edgeform, connect
              to your git repository, and deploy your project to a single Worker
              that serves both front-end and back-end and reaches users in less
              than 50 ms worldwide."
          />

          <GridCards />
          <SectionHeader
            title="Proven frontend infrastructure, powering products at scale"
            description="The same end-to-end frontend stack behind Edgeform's own products
              — battle-tested across billions of requests and millions of users
              daily. Build with the same primitives we use in production"
          />

          <div className="bg-[#f0e3de20]/30 relative w-full p-1 rounded-md">
            <HeroImage />
            <div className="flex justify-end p-1">
              <span className="text-[#f0e3de]/70">Image source -</span>
              <Link
                className="text-[#ff5e1f]"
                href="https://www.cloudflare.com/solutions/frontends/"
              >
                Cloudflare
              </Link>
            </div>
          </div>
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
    </section>
  );
};

export default Hero;

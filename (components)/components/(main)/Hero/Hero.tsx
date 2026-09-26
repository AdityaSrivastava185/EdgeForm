import Pattern from "@/(components)/(utility)/utility/Pattern";
import VerticalBorder from "@/(components)/(utility)/utility/VerticalBorder";
import React from "react";

const Hero = () => {
  return (
    <section className="container h-svh">
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

        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative flex items-center justify-center h-36 w-72">
            <Pattern />
            <div className="flex items-center justify-center gap-2 border-1 border-[#ff5e1f] border-dashed rounded-md p-2 bg-[#ff5e1f]/5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline-block shrink-0 size-5"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="#ff5e1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9h18M9 9v12M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z" />
                  </g>
                </svg>
              </span>
              <p className="text-[#ff5e1f]">FRONTEND</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl text-balance">
              Deploy lightning-fast websites and web apps on Edgeform's global
              network.{" "}
            </h3>
            <p className="text-balance">
              Bring any JavaScript framework or build tool to Edgeform, connect
              to your git repository, and deploy your project to a single Worker
              that serves both front-end and back-end and reaches users in less
              than 50 ms worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="border-[#262626] relative flex h-full flex-col border col-span-1">
              <div className="pointer-events-none absolute inset-0 z-10 select-none">
                <div className="absolute bg-[#161414] -left-[7px] -top-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
                <div className="absolute bg-[#161414] -right-[7px] -top-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
                <div className="absolute bg-[#161414] -left-[7px] -bottom-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
                <div className="absolute bg-[#161414] -right-[7px] -bottom-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
              </div>
              <div className="flex h-full flex-1 flex-col items-start p-6 lg:p-8">
                <p>HTML, JS and CSS caching</p>
                <p>
                  Every request for a static asset goes through Edgeform's
                  Tiered Cache for the fastest possible performance.
                </p>
              </div>
            </div>
            <div className="border-[#262626] relative flex h-full flex-col border col-span-1">
              <div className="flex h-full flex-1 flex-col items-start p-6 lg:p-8">
                <p>HTML, JS and CSS caching</p>
                <p>
                  Every request for a static asset goes through Edgeform's
                  Tiered Cache for the fastest possible performance.
                </p>
              </div>
            </div>
            <div className="border-[#262626] relative flex h-full flex-col border col-span-1">
              <div className="pointer-events-none absolute inset-0 z-10 select-none">
                <div className="absolute bg-[#161414] -left-[7px] -top-[7px] w-3.5 h-3.5 border  border-[#f0e3de20] rounded-sm"></div>
                <div className="absolute bg-[#161414] -right-[7px] -top-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
                <div className="absolute bg-[#161414] -left-[7px] -bottom-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
                <div className="absolute bg-[#161414] -right-[7px] -bottom-[7px] w-3.5 h-3.5 border border-[#f0e3de20] rounded-sm"></div>
              </div>
              <div className="flex h-full flex-1 flex-col items-start p-6 lg:p-8">
                <p>HTML, JS and CSS caching</p>
                <p>
                  Every request for a static asset goes through Edgeform's
                  Tiered Cache for the fastest possible performance.
                </p>
              </div>
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

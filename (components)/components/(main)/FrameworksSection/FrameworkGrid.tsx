import React from "react";

const FrameworkGrid = () => {
  return (
    <div className="my-20 w-full">
      <div className="relative">

        {/* Top-left */}
        <div className="hidden md:block absolute -left-[7px] -top-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-background-tertiory bg-background" />

        {/* Top - vertical divider */}
        <div className="hidden md:block absolute left-[66.6667%] -top-[7px] z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-sm border border-background-tertiory bg-background" />

        {/* Top-right */}
        <div className="hidden md:block absolute -right-[7px] -top-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-background-tertiory bg-background" />

        {/* Middle - vertical divider + first horizontal divider */}
        <div className="hidden md:block absolute left-[66.6667%] top-1/3 z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-background-tertiory bg-background" />

        {/* Middle-right - first horizontal divider */}
        <div className="hidden md:block absolute -right-[7px] top-1/3 z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-sm border border-background-tertiory bg-background" />

        {/* Middle - vertical divider + second horizontal divider */}
        <div className="hidden md:block absolute left-[66.6667%] top-2/3 z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-background-tertiory bg-background" />

        {/* Middle-right - second horizontal divider */}
        <div className="hidden md:block absolute -right-[7px] top-2/3 z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-sm border border-background-tertiory bg-background" />

        {/* Bottom-left */}
        <div className="hidden md:block absolute -bottom-[7px] -left-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-background-tertiory bg-background" />

        {/* Bottom - vertical divider */}
        <div className="hidden md:block absolute bottom-[0px] left-[66.6667%] z-20 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 rounded-sm border border-background-tertiory bg-background" />

        {/* Bottom-right */}
        <div className="hidden md:block absolute -bottom-[7px] -right-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-background-tertiory bg-background" />

        {/* ================= MAIN GRID ================= */}

        <div className="grid min-h-[400px] w-full grid-cols-1 border border-background-tertiory lg:grid-cols-[2fr_1fr]">
          
          {/* LEFT PANEL */}
          <div className="relative flex items-center justify-center border-b border-background-tertiory lg:border-b-0 lg:border-r">
            <div className="w-full max-w-[500px] p-7 md:px-4 md:p-0">
              {/* Command box */}
              <div className="rounded-md border border-dashed border-background-tertiory p-1">
                <div className="overflow-hidden rounded-[5px] border border-background-tertiory bg-[#151515]">
                  
                  {/* Package manager tabs */}
                  <div className="flex h-12 items-center gap-1 border-b border-background-tertiory px-2">
                    <button className="rounded-[4px] border border-background-tertiory px-2 py-1 font-mono text-accent-light">
                      npm
                    </button>

                    <button className="px-2 py-1 font-mono text-accent-light/70">
                      pnpm
                    </button>

                    <button className="px-2 py-1 font-mono text-accent-light/70">
                      yarn
                    </button>
                  </div>

                  {/* Command */}
                  <div className="flex h-[40px] items-center px-2 font-mono">
                    <span className="mr-2 select-none text-accent-light/70">
                      $
                    </span>

                    <span className="text-accent">
                      npm create edgeform my-app
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy button */}
            <button
              type="button"
              aria-label="Copy command"
              className="hidden absolute bottom-3 right-3 md:flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-dashed border-background-tertiory text-accent-light/70 transition-colors hover:border-accent hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="9" y="9" width="10" height="10" rx="2" />
                <path d="M5 15V7a2 2 0 0 1 2-2h8" />
              </svg>
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="grid grid-rows-3">

            {/* Feature 1 */}
            <div className="flex flex-col justify-start border-b border-background-tertiory px-6 py-6">
              <h3 className="mb-1 font-medium text-accent-light">
                Framework-agnostic
              </h3>

              <p className="text-accent-light/70">
                Support for Next.js, React, Vue, Svelte, Astro, and more — with
                automatic detection and configurations
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col justify-start border-b border-background-tertiory px-6 py-6">
              <h3 className="mb-1 font-medium text-accent-light">
                Full-stack ready
              </h3>

              <p className="text-accent-light/70">
                Deploy both frontend and backend together — from API routes to
                serverless functions, all in one seamless deployment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col justify-start px-6 py-6">
              <h3 className="mb-1 font-medium text-accent-light">
                Edge-optimized
              </h3>

              <p className="text-accent-light/70">
                Your code runs at the edge in 330+ cities worldwide — with KV
                storage, D1 databases, and R2 object storage available globally.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkGrid;
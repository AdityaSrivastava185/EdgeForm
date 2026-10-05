import SectionHeader from "@/(components)/(utility)/utility/SectionHeader";
import Link from "next/link";
import React from "react";

const featuresList = [
  {
    index: 1,
    title: "Every JavaScript framework",
    description:
      "Support for Next.js, Hono, React Router, TanStack, Remix, Astro, Nuxt, RedwoodJS and more.",
  },
  {
    index: 2,
    title: "Anycast Network",
    description:
      "One IP worldwide: traffic auto-lands at the closest edge for consistent low latency",
  },
  {
    index: 3,
    title: "Zero-config CI/CD",
    description:
      "Connect to GitHub or GitLab, and every pull request gets a unique preview URL",
  },
  {
    index: 4,
    title: "Gradual deployments",
    description:
      "Deploy changes to only a specific percentage of traffic to mitigate risk of code changes",
  },
  {
    index: 5,
    title: "Instant rollbacks",
    description: "Rollback instantly when you need to",
  },
  {
    index: 6,
    title: "Front-end + back-end together",
    description:
      "Deploy HTML/CSS/JS + your backend API in one deploy as a simple, single project",
  },
  {
    index: 7,
    title: "Modern transport protocols",
    description:
      "HTTP/3 & QUIC are enabled by default — no config, no extra cost",
  },
  {
    index: 8,
    title: "Preview deployments included",
    description:
      "Every pull request automatically gets a unique preview URL to view and share before deploying to production",
  },
  {
    index: 9,
    title: "Framework detection for zero config",
    description:
      "Automatically detects your framework and configures the optimal build and deployment settings",
  },
  {
    index: 10,
    title: "Edge-first architecture",
    description: "A globally distributed, edge-native experience",
  },
];

const FeaturesGridCards = () => {
  return (
    <div className="mx-auto w-full px-3 sm:px-4 md:max-w-5xl md:px-0">
      <div className="rounded-md border border-dashed border-surface p-1 sm:p-2">
        <div className="overflow-hidden rounded-md border border-surface">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((feature) => (
              <SectionHeader
                key={feature.index}
                title={feature.title}
                description={feature.description}
                className="
                  relative flex h-full flex-col gap-0
                  border-b border-surface
                  px-4 py-5
                  sm:px-5 sm:py-5
                  md:border-r md:px-5 md:py-4
                "
                titleClassName="
                  text-start text-balance
                  text-lg
                  sm:text-xl
                  md:text-lg
                "
                descriptionClassName="
                  mt-2
                  text-start text-balance
                  leading-relaxed
                  text-accent-light/70
                "
              />
            ))}

            <div className="col-span-1 flex items-center justify-center px-4 py-8 md:col-span-2 md:px-5 md:py-6">
              <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5 md:gap-7">
                <Link
                  className="
                    w-full rounded-full border border-background-tertiory
                    px-5 py-3 text-center
                    transition-all duration-300 ease-in-out
                    hover:border-dashed
                    hover:border-accent
                    hover:bg-accent/5
                    hover:text-accent
                    sm:w-auto
                  "
                  href=""
                >
                  Deploy a worker template
                </Link>

                <Link
                  className="
                    w-full rounded-full border border-background-tertiory
                    px-5 py-3 text-center
                    transition-all duration-300 ease-in-out
                    hover:border-dashed
                    hover:border-accent
                    hover:bg-accent/5
                    hover:text-accent
                    sm:w-auto
                  "
                  href=""
                >
                  See all templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGridCards;
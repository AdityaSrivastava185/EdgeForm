import SectionHeader from "@/(components)/(utility)/utility/SectionHeader";
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
    description:
      "A globally distributed, edge-native experience",
  },
];

const FeaturesGridCards = () => {
  return (
    <div className="mx-auto w-full md:max-w-5xl">
      <div className="rounded-md border border-dashed border-[#f0e3de]/10 md:p-2">
        <div className="overflow-hidden rounded-md border border-[#262626]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((feature) => (
              <SectionHeader
                key={feature.index}
                title={feature.title}
                description={feature.description}
                className="relative flex h-full flex-col gap-0 border-b border-r border-[#262626] md:px-5 md:py-4"
                titleClassName="text-start text-balance text-xl md:text-lg"
                descriptionClassName="text-start text-balance text-[#f0e3de]/70"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGridCards;
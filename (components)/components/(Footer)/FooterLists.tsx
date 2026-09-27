import VerticalBorder from "@/(components)/(utility)/utility/VerticalBorder";
import React from "react";

const footerCardsItems = [
  {
    id: 1,
    title: "Get Started",
    items: [
      "Plans",
      "Contact Sales",
      "Partner",
      "Find a partner",
      "Startups",
      "Domain name search",
      "Programs",
    ],
  },
  {
    id: 2,
    title: "Resources",
    items: [
      "App innovation",
      "Edgeform radar",
      "Blogs",
      "Events",
      "Support",
      "Status",
    ],
  },
  {
    id: 3,
    title: "Solutions",
    items: [
      "SSE and SASE platform",
      "AI cloud",
      "Frontend development plarform",
      "Multi-Tenant development plarform",
      "Backend platform",
    ],
  },
  {
    id: 4,
    title: "Company",
    items: ["About", "Careers", "Investors", "Networks"],
  },
  {
    id: 5,
    title: "Developers",
    items: [
      "Documentation",
      "Learning center",
      "Community",
      "Docs",
      "Tutorials",
      "Developer programs",
    ],
  },
];

const FooterLists = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[20%_1fr]">
          <div>
            <h1 className="text-xl md:text-2xl">Edgeform</h1>
          </div>

          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {footerCardsItems.map((items) => (
                <div key={items.id} className="px-3 py-1">
                  <h4 className="mb-4 font-medium">
                    {items.title}
                  </h4>

                  <div className="flex flex-col gap-2">
                    {items.items.map((itemName) => (
                      <p
                        key={itemName}
                        className="text-foreground/50"
                      >
                        {itemName}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLists;
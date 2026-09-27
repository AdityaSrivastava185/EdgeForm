import React from "react";
import ProductCategoryCard from "./ProductCatergory";

const productCategories = [
  {
    category: "Compute",
    products: [
      {
        title: "Browser Run",
        description: "Automated browsers",
      },
      {
        title: "Containers",
        description: "Any language, anywhere",
      },
      {
        title: "Durable Objects",
        description: "Stateful compute",
      },
      {
        title: "Sandboxes",
        description: "Secure code execution",
      },
      {
        title: "Workers",
        description: "Global serverless functions",
      },
      {
        title: "Workers for Platforms",
        description: "Programmable Platform Solutions",
      },
      {
        title: "Workflows",
        description: "Process orchestration",
      },
    ],
  },

  {
    category: "Storage",
    products: [
      {
        title: "Artifacts",
        description: "Git-native versioned storage",
      },
      {
        title: "D1",
        description: "Serverless SQL",
      },
      {
        title: "Data Platform",
        description: "Ingest, Catalog & Query",
      },
      {
        title: "Hyperdrive",
        description: "Global databases",
      },
      {
        title: "Queues",
        description: "Message processing",
      },
      {
        title: "R2",
        description: "Egress-free storage",
      },
      {
        title: "KV",
        description: "Ultra-fast key-value storage",
      },
    ],
  },

  {
    category: "AI",
    products: [
      {
        title: "Agents",
        description: "Build stateful AI agents",
      },
      {
        title: "AI Gateway",
        description: "AI observability",
      },
      {
        title: "AI Search",
        description: "Instant retrieval",
      },
      {
        title: "Vectorize",
        description: "Vector database",
      },
      {
        title: "Workers AI",
        description: "Edge AI models",
      },
    ],
  },

  {
    category: "SASE / Zero Trust",
    products: [
      {
        title: "SASE",
        description: "Cloudflare SASE platform",
      },
      {
        title: "Access",
        description: "Zero trust access to private resources",
      },
      {
        title: "CASB",
        description: "SaaS and cloud posture",
      },
      {
        title: "Data Loss Prevention",
        description: "Protect sensitive data",
      },
      {
        title: "Gateway",
        description: "Secure web gateway",
      },
    ],
  },

  {
    category: "Security",
    products: [
      {
        title: "DDoS Protection",
        description: "Mitigation Solutions",
      },
      {
        title: "Rate Limiting",
        description: "Abuse prevention",
      },
      {
        title: "SSL",
        description: "Secure Your Site with SSL",
      },
      {
        title: "Turnstile",
        description: "A CAPTCHA Replacement Solution",
      },
      {
        title: "WAF",
        description: "Web Application Firewall",
      },
    ],
  },

  {
    category: "Network & Content Delivery",
    products: [
      {
        title: "CDN",
        description: "Faster delivery & caching",
      },
      {
        title: "DNS",
        description: "Fast DNS",
      },
      {
        title: "Load Balancing",
        description: "Zero downtime",
      },
      {
        title: "TURN / SFU",
        description: "Real-time infra",
      },
      {
        title: "Analytics",
        description: "Insights into your traffic",
      },
    ],
  },
];

const AllProductsGridCards = () => {
  return (
    <div className="my-20 w-full">
      <div className="relative">
    
        <div className="absolute -left-[7px] -top-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-[#f0e3de15] bg-background" />

   
        <div className="absolute left-1/3 -top-[7px] z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

      
        <div className="absolute left-2/3 -top-[7px] z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

      
        <div className="absolute -right-[7px] -top-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-[#f0e3de15] bg-background" />

        <div className="absolute -left-[7px] top-[57%] z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

       
        <div className="absolute left-1/3 top-[57%] z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

      
        <div className="absolute left-2/3 top-[57%] z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

        
        <div className="absolute -right-[7px] top-[57%] z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

       
        <div className="absolute -bottom-[7px] -left-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-[#f0e3de15] bg-background" />

  
        <div className="absolute bottom-[-7px] left-1/3 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

        <div className="absolute bottom-[-7px] left-2/3 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-sm border border-[#f0e3de15] bg-background" />

        <div className="absolute -bottom-[7px] -right-[7px] z-20 h-3.5 w-3.5 rounded-sm border border-[#f0e3de15] bg-background" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <ProductCategoryCard
              key={category.category}
              category={category.category}
              products={category.products}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsGridCards;
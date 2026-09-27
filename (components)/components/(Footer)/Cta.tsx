import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="mx-auto w-full md:max-w-[1440px] inner-container">
      <section className="relative h-[500px] w-full bg-[url('/hero-poster.avif')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-2xl">
        <div>
          <h1 className="md:text-5xl text-foreground text-center">
            Deploy your frontend easily
          </h1>
          <p className="text-center text-balance max-w-4xl mx-auto w-full py-2">
            Join thousands of developers who've eliminated infrastructure
            complexity and deployed globally with Edgeform. Start building for
            free — no credit card required.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 py-2">
            <Link
              href={""}
              className="bg-foreground text-background rounded-full px-5 py-3"
            >
              Start Building for free
            </Link>
            <Link
              href=""
              className="rounded-full border border-foreground/10 bg-foreground/5 px-5 py-3 text-foreground backdrop-blur-2xl transition-all duration-300 hover:bg-foreground/10"
            >
              View Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;

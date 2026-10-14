import Link from "next/link";
import React from "react";

const FooterInstructions = () => {
  return (
    <div className="mx-7">
      <div className="container border-x border-dashed border-background-tertiory px-5">
        <div className="inner-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="pb-2 md:pb-0">
              Source and Inspiration from{" "}
              <Link
                href={"https://www.cloudflare.com/solutions/frontends/"}
                className="text-accent"
              >
                Cloudflare
              </Link>
            </span>
            <div className="flex flex-col md:flex-row items-start gap-2 text-accent-light-70">
              <div>
                <p>Edgeform</p>
              </div>
              <div>
                <p>Privacy Policy</p>
              </div>
              <div>
                <p>Terms and Conditions</p>
              </div>
              <div>
                <p>Terms of use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInstructions;

import Link from "next/link";
import React from "react";

const FooterInstructions = () => {
  return (
    <div className="mx-7">
      <div className="container border-x border-dashed border-[#f0e3de15] md:px-5">
        <div className="inner-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <span>
              Source and Inspiration from{" "}
              <Link
                href={"https://www.cloudflare.com/solutions/frontends/"}
                className="text-[#ff5e1f]"
              >
                Cloudflare
              </Link>
            </span>
            <div className="flex items-center gap-2 ">
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

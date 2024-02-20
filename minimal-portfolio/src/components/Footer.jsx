import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="pt-8 sm:pt-6 mt-6 border-t-2 border-rust"></div>
      <div className="flex flex-col items-center justify-center pb-4">
        <p className="text-sm">
          &copy; 2024 - Made with love and code by{" "}
          <a href="https://github.com/qberg" className="text-the-blue">
            Qberg
          </a>
          .
        </p>
        <p className="text-sm">
          Deployed on{" "}
          <a href="https://vercel.com/" className="text-the-blue">
            Vercel
          </a>
          , Open sourced on{" "}
          <a
            href="https://github.com/qberg/portfolios.git"
            className="text-the-blue"
          >
            Github
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;

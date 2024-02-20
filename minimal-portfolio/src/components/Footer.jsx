import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="pt-8 sm:pt-5 mt-10 border-t-2 border-rust"></div>
      <div className="flex flex-row items-center justify-center pb-4">
        <p className="text-sm">
          &copy; 2024. Made with love and code by{" "}
          <a href="https://github.com/qberg" className="text-the-blue">
            Qberg
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;

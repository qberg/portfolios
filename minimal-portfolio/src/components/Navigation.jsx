import React from "react";

const Navigation = () => {
  return (
    <div className="grid grid-flow-col gap-x-5 max-[800px]:hidden">
      <a href="/timeline">timeline</a>
      <a href="/contact">contact</a>
    </div>
  );
};

export default Navigation;

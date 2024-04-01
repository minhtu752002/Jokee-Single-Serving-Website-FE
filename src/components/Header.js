import React from "react";
import logo from "../../src/assets/images/flowerlogo.png";
import logo1 from "../../src/assets/images/HL_Logo.png";

export default function Header() {
  return (
    <div className="flex justify-center">
      <img
        src={logo1}
        alt="anhHL"
        className="w-[100px] h-[60px] object-contain mx-[100px]"
      />
      <div className="mx-[400px]"></div>
      <img
        src={logo}
        alt="anhflower"
        className="w-[250px] h-[60px] object-contain mx-2"
      />
    </div>
  );
}

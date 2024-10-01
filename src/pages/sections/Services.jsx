import React from "react";
import sideImg from "../../assets/services-aside.png";

const Services = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="bg-[#f8f9fb] py-6 md:py-8 px-8 rounded-2xl bg-[url('/src/assets/services-aside.png')] bg-no-repeat bg-contain bg-right">
        <p className="text-sm text-[#c78176]">Services</p>
        <h2 className="text-lg md:text-[34px] my-2">Nails Spa</h2>
        <p className="text-sm text-[#686868]">Home/Services/Nails/<span className="text-[#c78176]">Nail SPA</span></p>
      </div>
    </div>
  );
};

export default Services;

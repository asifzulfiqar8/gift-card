import React from "react";

const UpperBar = () => {
  return (
    <div
      className="py-3 px-4"
      style={{ backgroundImage: "linear-gradient(45deg, #de988d, #a15d5a)" }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4">
          <p className="text-white text-xs sm:text-sm md:text-base">
            Makeup That Spell Attention - 4 Classy Makeup Looks.
          </p>
          <button className="bg-white w-[113px] h-[27px] rounded-full grid place-items-center text-[#A0A0A0] text-xs sm:text-sm md:text-base">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperBar;

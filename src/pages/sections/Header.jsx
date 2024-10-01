import React, { useState } from "react";
import logo from "../../assets/logo.png";
import WhatsappIcon from "../../assets/whatsapp-img.png";
import FacebookIcon from "../../assets/svgs/FacebookIcon";
import InstagramIcon from "../../assets/svgs/InstagramIcon";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const dropdownHandler = () => setIsDropdownOpen(!isDropdownOpen);
  const navHandler = () => setIsNavOpen(!isNavOpen);

  return (
    <div>
      <div className="container mx-auto p-4 bg-white items-center justify-between gap-4 border-b border-[#E4E4E4] hidden lg:flex">
        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="/"
            className="bg-[#fbf0ee] rounded-full w-[104px] h-[50px] grid place-items-center text-[#8A8A8A] text-sm"
          >
            Gift Card
          </a>
          <a href="tel:2309239023">
            <PhoneIcon />
          </a>
          <a href="/" className="text-[#000] text-sm ">
            Blog
          </a>
        </div>
        <a href="/">
          <img src={logo} alt="logo" className="w-[189px] h-auto" />
        </a>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative cursor-pointer" onClick={dropdownHandler}>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#000]">Services</span>
              <div
                className={`transition-all duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronIcon />
              </div>
            </div>
            <div
              className={`absolute top-[25px] right-0 w-[100px] border rounded-md transition-all duration-300 ${
                isDropdownOpen ? "h-[86px] opacity-100" : "h-0 opacity-0"
              }`}
            >
              <a
                href="/"
                className="text-sm px-2 py-1 bg-white hover:bg-slate-200 rounded-t-md block"
              >
                Service One
              </a>
              <a
                href="/"
                className="text-sm px-2 py-1 bg-white hover:bg-slate-200 block"
              >
                Service One
              </a>
              <a
                href="/"
                className="text-sm px-2 py-1 bg-white hover:bg-slate-200 rounded-b-md block"
              >
                Service One
              </a>
            </div>
          </div>
          <a
            href="/"
            className="w-[143px] h-[50px] rounded-full bg-white flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#bfffcc] border border-[#31d751]"
          >
            <img src={WhatsappIcon} alt="whatsapp icon" className="w-6" />
            <p className="text-sm text-[#31d751]">Book Now</p>
          </a>
        </div>
      </div>
      <div className="p-4 bg-white border-b border-[#E4E4E4] flex justify-between items-center lg:hidden relative">
        <a href="/">
          <img src={logo} alt="logo" className="w-[120px] h-auto" />
        </a>
        <div className="cursor-pointer" onClick={navHandler}>
          <HamburgerIcon />
        </div>
      </div>
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-[#000000b0] z-10 w-full h-screen block lg:hidden"
          onClick={navHandler}
        >
          <div
            className="flex flex-col justify-between gap-4 bg-white rounded-lg p-4 m-2 w-[60%] h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[100px] h-auto border-b pb-2"
                />
              </a>
              <div className="mt-4">
                <p className="text-sm font-semibold">Menu</p>
                <div className="flex flex-col gap-2 mt-2">
                  <a href="/" className="text-[#8A8A8A] text-xs font-medium">
                    Gift Card
                  </a>
                  <div>
                    <div className="flex items-center gap-1">
                      <p
                        className="text-xs text-[#8A8A8A]"
                        onClick={dropdownHandler}
                      >
                        Services
                      </p>
                      <div className={`${isDropdownOpen ? 'rotate-180':'rotate-0'} transition-all duration-200`}>
                        <ChevronIcon />
                      </div>
                    </div>
                    {/* lists */}
                    <div
                      className={`flex flex-col gap-1 mt-1 bg-[#dcdcdc] rounded-md transition-all duration-300 ${
                        isDropdownOpen
                          ? "p-2 h-[76px] opacity-100"
                          : "h-0 opacity-0 invisible"
                      }`}
                    >
                      <a
                        href="/"
                        className="text-[#8A8A8A] text-xs font-medium pb-1"
                      >
                        Service One
                      </a>
                      <a
                        href="/"
                        className="text-[#8A8A8A] text-xs font-medium"
                      >
                        Service Two
                      </a>
                      <a
                        href="/"
                        className="text-[#8A8A8A] text-xs font-medium"
                      >
                        Service Three
                      </a>
                    </div>
                  </div>
                  <a href="/" className="text-[#8A8A8A] text-xs font-medium">
                    Blog
                  </a>
                  <a href="/" className="text-[#8A8A8A] text-xs font-medium">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

const PhoneIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z"
        fill="#fbf0ee"
      />
      <path
        d="M21.8401 23.7529C22.313 24.606 22.8581 25.4248 23.5658 26.1714C24.2758 26.9226 25.1587 27.6062 26.3015 28.1902C26.3862 28.2315 26.4664 28.2315 26.5385 28.2028C26.6473 28.1616 26.7584 28.0711 26.8672 27.9624C26.9519 27.8776 27.0573 27.7425 27.1672 27.5948C27.6069 27.0165 28.1509 26.2985 28.9193 26.6581C28.9364 26.6661 28.949 26.6752 28.9662 26.6821L31.529 28.1559C31.537 28.1605 31.5462 28.1685 31.553 28.1731C31.8909 28.4055 32.0306 28.7639 32.034 29.1705C32.034 29.5838 31.8817 30.0488 31.6584 30.4415C31.363 30.9603 30.9278 31.3038 30.4262 31.5305C29.9487 31.7504 29.4174 31.8684 28.9067 31.9439C28.1051 32.0619 27.3539 31.9863 26.5855 31.7504C25.8343 31.5179 25.0774 31.1343 24.2506 30.6236L24.1899 30.5847C23.8109 30.3476 23.4009 30.0946 22.999 29.7957C21.5286 28.6849 20.0297 27.0806 19.0529 25.3148C18.2341 23.8331 17.7875 22.2333 18.0315 20.7092C18.1666 19.8733 18.525 19.1129 19.1502 18.6114C19.6953 18.1716 20.4293 17.9312 21.3798 18.0159C21.4886 18.0239 21.5859 18.0869 21.6374 18.1808L23.2807 20.9589C23.5211 21.2703 23.5509 21.5795 23.4192 21.8887C23.3104 22.1417 23.0906 22.3753 22.7906 22.5929C22.7024 22.6685 22.597 22.7452 22.486 22.8254C22.1184 23.0922 21.7004 23.4002 21.8436 23.7621L21.8401 23.7529Z"
        fill="#8A8A8A"
      />
    </svg>
  );
};

const ChevronIcon = () => {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.29279 4.78972L0.70701 2.20394C0.0770403 1.57397 0.52321 0.496826 1.41411 0.496826H6.58569C7.47659 0.496826 7.92276 1.57397 7.29279 2.20394L4.70701 4.78972C4.31648 5.18024 3.68332 5.18024 3.29279 4.78972Z"
        fill="#878787"
      />
    </svg>
  );
};

const HamburgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
};

import React from "react";
import Logo from "../../assets/logo.png";
import WhatsappIcon from "../../assets/whatsapp-img.png";
import FacebookIcon from "../../assets/svgs/FacebookIcon";
import InstagramIcon from "../../assets/svgs/InstagramIcon";
import cardImg from '../../assets/cards-img.png'

const Footer = () => {
  return (
    <>
      <div className="px-4 rounded-t-[25px] md:rounded-t-[35px] bg-[#f9f2f2] py-[30px] md:py-[60px] border-b-2 border-white">
        <div className="container mx-auto">
          <p className="text-base md:text-lg text-center">Our Locations</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <LocationsTab title="Abu Dhabi" />
            <LocationsTab title="Egypt" />
            <LocationsTab title="Baharain" />
            <LocationsTab title="Berlin" />
            <LocationsTab title="London" />
            <LocationsTab title="Denmark" />
            <LocationsTab title="Egypt" />
            <LocationsTab title="Baharain" />
            <LocationsTab title="Berlin" />
            <LocationsTab title="London" />
            <LocationsTab title="Denmark" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f2f2] px-4 pt-[30px] md:pt-[40px]">
        <div className="container mx-auto pb-[20px] md:pb-[30px]">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="logo" className="w-[200px] md:w-[250px]" />
            <p className="py-4 md:py-8 text-sm md:text-base text-[#000] w-full md:w-[50%] text-center">
              Enjoy top-tier home salon services in Dubai, delivered right to
              your door. Relax as we bring the ultimate pampering experience to
              the comfort of your home.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <FooterLink title="Home" link="/" />
              <FooterLink title="About Noora" link="/" />
              <FooterLink title="Blogs" link="/" />
              <FooterLink title="Services" link="/" />
              <FooterLink title="Contact Us" link="/" />
              <FooterLink title="Sitemap" link="/" />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-[20px] md:py-[30px] border-y border-[#f6e1dd]">
          <div className="flex flex-wrap justify-between gap-8">
            <FooterList
              title="Nails"
              links={["Nail Spa", "Nail Extension", "Nail Treatments"]}
            />
            <FooterList title="Occasions" links={["Wedding", "Gift Cards"]} />
            <FooterList
              title="Massage"
              links={[
                "Couple Massage",
                "Therapeutic Massag",
                "Reflexology Massage Thai",
                "Massage",
              ]}
            />
            <FooterList
              title="Eyelash"
              links={["Eyelash Extension", "Brow Lamination", "Lash Lifting"]}
            />
            <FooterList
              title="Face & Body"
              links={[
                "Facial",
                "Clean Ups",
                "Waxing",
                "Threading",
                "Bikini/Brazilian Waxing",
              ]}
            />
            <FooterList
              title="Hair"
              links={[
                "Blow Dry Hair Botox",
                " Hair Color",
                "Hair Cut",
                "Hair Styling Keratin",
              ]}
            />
          </div>
          <div className="py-6 flex flex-wrap gap-4 justify-between">
            <a
              href="/"
              className="w-[130px] md:w-[143px] h-[45px] md:h-[50px] rounded-full transition-all duration-200 hover:bg-[#bfffcc] bg-white flex items-center justify-center gap-2 border border-[#31d751]"
            >
              <img src={WhatsappIcon} alt="whatsapp icon" className="w-6" />
              <p className="text-sm text-[#31d751]">Book Now</p>
            </a>
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
        <div className="container mx-auto py-4 md:py-6 flex flex-wrap items-center justify-center xl:justify-between gap-4">
          <div className="flex items-center flex-wrap justify-center gap-3 md:gap-4">
            <p className="text-xs sm:text-sm lg:text-base text-[#cd8d83]">Nooora Beauty Concierge © 2022 2023</p>
            <div className="w-[2px] h-[16px] bg-[#d49e96] hidden sm:block"></div>
            <img src={cardImg} alt="cards-img" className="w-[200px] md:w-[250px]" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href="/" className="text-xs sm:text-sm lg:text-base text-[#cd8d83] px-4 sm:border-r-2 border-[#cd8d83] !leading-none">Terms</a>
            <a href="/" className="text-xs sm:text-sm lg:text-base text-[#cd8d83] px-4 sm:border-r-2 border-[#cd8d83] !leading-none">Reschedule</a>
            <a href="/" className="text-xs sm:text-sm lg:text-base text-[#cd8d83] px-4 sm:border-r-2 border-[#cd8d83] !leading-none">Refund</a>
            <a href="/" className="text-xs sm:text-sm lg:text-base text-[#cd8d83] px-4 sm:border-r-2 border-[#cd8d83] !leading-none">Cancellation</a>
            <a href="/" className="text-xs sm:text-sm lg:text-base text-[#cd8d83] px-4">Privacy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const LocationsTab = ({ title }) => {
  return (
    <div className="w-[158px] h-[56px] bg-white hover:bg-[#e29a8e] hover:text-white transition-all duration-300 rounded-xl grid place-items-center p-4 text-sm md:text-base text-[#363636]">
      {title}
    </div>
  );
};
const FooterLink = ({ title, link }) => {
  return (
    <a
      href={link}
      className="bg-transparent hover:bg-[#9e5a57] hover:text-white transition-all duration-300 rounded-full grid place-items-center px-6 py-2 border border-[#e5c4bf] text-sm text-[#9e5a57]"
    >
      {title}
    </a>
  );
};

const FooterList = ({ title, links }) => {
  return (
    <div>
      <p className="text-sm md:text-base font-semibold">{title}</p>
      <div className="flex flex-col gap-2 ml-2 mt-2">
        {links.map((link, i) => (
          <a key={i} href="/" className="text-sm text-[#c17a5b]">
            <li>{link}</li>
          </a>
        ))}
      </div>
    </div>
  );
};

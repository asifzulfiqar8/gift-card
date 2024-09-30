import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import ReviewPic from "../../assets/review-pic.png";
import Slider from "react-slick";

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto pt-[40px] md:pt-[60px] pb-[60px] md:pb-[90px] px-4">
      <Slider {...settings}>
        <ReviewSlide />
        <ReviewSlide />
        <ReviewSlide />
        <ReviewSlide />
      </Slider>
    </div>
  );
};

export default ReviewSection;

const ReviewSlide = () => {
  return (
    <div>
      <div className="flex justify-center">
        <RiDoubleQuotesL fontSize={56} color="#d69388" />
      </div>
      <p className="my-4 md:my-6 lg:my-8 text-center text-lg sm:text-[24px] md:text-[35px]">
        Had mani / pedi, Lovely technicians, Really happy with results, Will
        definitely use again. Thank you.
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-dashed border-[#d69388]">
        <div className="flex items-center gap-4">
          <img src={ReviewPic} alt="profile image" />
          <p className="text-sm md:text-lg">Polina Kuzma</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="text-[#d69388] text-sm">
            5 Star rating rating on our services
          </p>
        </div>
      </div>
    </div>
  );
};

const StarIcon = () => {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.549 0.931209C10.8484 0.00990939 12.1518 0.00990939 12.4512 0.931209L14.3065 6.64141C14.4404 7.05341 14.8244 7.33241 15.2576 7.33241H21.2617C22.2304 7.33241 22.6332 8.57201 21.8495 9.14141L16.992 12.6705C16.6416 12.9252 16.4949 13.3766 16.6288 13.7886L18.4841 19.4988C18.7835 20.4201 17.729 21.1863 16.9453 20.6168L12.0879 17.0877C11.7374 16.8331 11.2628 16.8331 10.9123 17.0877L6.05487 20.6168C5.27116 21.1863 4.21667 20.4201 4.51602 19.4988L6.37139 13.7886C6.50527 13.3766 6.35861 12.9252 6.00812 12.6705L1.15071 9.14141C0.366987 8.57201 0.769767 7.33241 1.73849 7.33241H7.74259C8.17577 7.33241 8.55977 7.05341 8.69367 6.64141L10.549 0.931209Z"
        fill="#d69388"
      />
    </svg>
  );
};

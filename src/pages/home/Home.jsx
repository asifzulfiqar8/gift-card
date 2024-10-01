import React from "react";
import UpperBar from "../sections/UpperBar";
import Header from "../sections/Header";
import WeOffer from "../sections/WeOffer";
import OptionsGallery from "../sections/OptionsGallery";
import CommonQuestions from "../sections/CommonQuestions";
import FeaturedPost from "../sections/FeaturedPost";
import ReviewSection from "../sections/ReviewSection";
import Footer from "../sections/Footer";
import Services from "../sections/Services";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute w-[390px] h-[390px] rounded-full bg-[#fcf5f3] top-[15%] left-[-10%] z-[-1] hidden md:block"></div>
      <UpperBar />
      <Header />
      <Services />
      <WeOffer />
      <OptionsGallery />
      <CommonQuestions />
      <FeaturedPost />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;

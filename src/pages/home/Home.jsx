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
    <>
      <UpperBar />
      <Header />
      <Services />
      <WeOffer />
      <OptionsGallery />
      <CommonQuestions />
      <FeaturedPost />
      <ReviewSection />
      <Footer />
    </>
  );
};

export default Home;

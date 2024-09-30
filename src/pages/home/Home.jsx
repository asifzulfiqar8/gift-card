import React from "react";
import UpperBar from "../sections/UpperBar";
import Header from "../sections/Header";
import WeOffer from "../sections/WeOffer";
import OptionsGallery from "../sections/OptionsGallery";
import CommonQuestions from "../sections/CommonQuestions";
import FeaturedPost from "../sections/FeaturedPost";

const Home = () => {
  return (
    <>
      <UpperBar />
      <Header />
      <WeOffer />
      <OptionsGallery />
      <CommonQuestions />
      <FeaturedPost />
    </>
  );
};

export default Home;

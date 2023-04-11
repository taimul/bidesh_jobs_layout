import React from "react";
import Hero from "./Hero/Hero";
import Slider2 from "./Slider2/Slider2";
import Sponsor from "./Sponsor/Sponsor";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Slider2 />
      <Sponsor />
    </div>
  );
};

export default Home;

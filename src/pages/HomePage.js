import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

const HomePage = (props) => {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
};

export default HomePage;

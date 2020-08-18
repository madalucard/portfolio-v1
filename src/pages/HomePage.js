import React from "react";
import Hero from "../components/Hero";

const HomePage = (props) => {
  return (
    <Hero title={props.title} subTitle={props.subtitle} text={props.text} />
  );
};

export default HomePage;

import * as React from "react";
import Navigation from "../components/Navbar";
import { GlobalStyles } from "../global-styles";
import HeroSection from "../components/Sections/Hero";
import SecondSection from "../components/Sections/Second";
import Achievement from "../components/Sections/Third";

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HeroSection />
      <SecondSection />
      <Achievement />
    </React.Fragment>
  );
};

export default IndexPage;

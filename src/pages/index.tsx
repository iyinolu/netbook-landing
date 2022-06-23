import * as React from "react";
import Navigation from "../components/Navbar";
import { GlobalStyles } from "../global-styles";
import HeroSection from "../components/Sections/Hero";
import SecondSection from "../components/Sections/Second";
import Achievement from "../components/Sections/Third";
import Footer from "../components/Sections/Footer";
import Community from "../components/Sections/Community";
import StoreDownload from "../components/Sections/StoreDownload";

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HeroSection />
      <SecondSection />
      <Achievement />
      <Community />
      <StoreDownload />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

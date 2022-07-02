import * as React from "react";
import Navigation from "../components/Navbar";
import { GlobalStyles } from "../global-styles";
import HeroSection from "../components/Sections/Hero";
import SecondSection from "../components/Sections/Second";
import Achievement from "../components/Sections/Third";
import Footer from "../components/Sections/Footer";
import Community from "../components/Sections/Community";
import StoreDownload from "../components/Sections/StoreDownload";
import { callback } from "../utils/intersectionObserver";
import { ANIMATE_CATEGORIES } from "../utils/constants";

const IndexPage = () => {

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold: 0 });

    Object.keys(ANIMATE_CATEGORIES).forEach((value) => {
      if (document !== undefined) {
        const targetList = document.querySelectorAll(
          `[data-animate-category='${value}']`
        );
        targetList.forEach((target) => {
          observer?.observe(target);
        });
      }
    });
  }, []);
  
  return (
    <React.Fragment>
      <GlobalStyles />
      <main>
        <HeroSection />
        <SecondSection />
        <Achievement />
        <Community />
        <StoreDownload />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default IndexPage;

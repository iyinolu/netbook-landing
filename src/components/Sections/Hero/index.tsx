import React from "react";
import Navigation from "../../Navbar";
import {
  AboutButton,
  CommunityBadge,
  HeroPage,
  Introduction,
  InviteButton,
  Main,
  MainText,
} from "./Hero.styled";
import HeroIllustration from "../../../images/hero-illustration.svg";

const HeroSection = () => (
  <HeroPage>
    <Navigation />
    <Main>
      <div>
        <Introduction>
          <CommunityBadge>Netbook Community</CommunityBadge>
          <MainText>Your Solutions For Community!</MainText>
          <p>
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </p>
          <div>
            <AboutButton>About More</AboutButton>
            <InviteButton>Invite Friend</InviteButton>
          </div>
        </Introduction>
      </div>
      <div>
        <img src={HeroIllustration} alt="hero-illustration" />
      </div>
    </Main>
  </HeroPage>
);

export default HeroSection;

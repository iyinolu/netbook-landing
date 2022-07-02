import React from "react";
import {
  InfoContainer,
  PictureContainer,
  PictureGridContainer,
  SecondSectionContainer,
  WhyNetbookContainer,
} from "./AboutUs";
import InfoImage1 from "../../../images/info-image-1.png";
import InfoImage2 from "../../../images/info-image-2.png";
import InfoImage3 from "../../../images/info-image-3.png";

const SecondSection = () => {
  return (
    <SecondSectionContainer>
      <InfoContainer>
        <WhyNetbookContainer data-animate-category="slideRight">
          <p>Whats Netboks?</p>
          <h2>Why Join to Netbook Social Network?</h2>
          <p>
            Recent surveys have indicated that small businesses recognise the
            need they have to connect with consumer.
          </p>
          <ul>
            <li>Groups</li>
            <li>Messages</li>
            <li>Share</li>
          </ul>
        </WhyNetbookContainer>
        <PictureGridContainer data-animate-category="slideup">
          <PictureContainer>
            <img src={InfoImage1}></img>
          </PictureContainer>
          <PictureContainer>
            <img src={InfoImage2}></img>
          </PictureContainer>
          <PictureContainer>
            <img src={InfoImage3}></img>
          </PictureContainer>
        </PictureGridContainer>
      </InfoContainer>
    </SecondSectionContainer>
  );
};

export default SecondSection;

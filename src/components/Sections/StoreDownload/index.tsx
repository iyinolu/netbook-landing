import React from "react";
import {
  StoreSection,
  StoreDownloadContainer,
  StoreDownloadLeft,
  StoreDownloadRight,
} from "./StoreDownload.styled";
import AppStore from "../../../images/appstore.png";
import PlayStore from "../../../images/playstore.png";
import MobileMockUp from "../../../images/mobile-muckup.png";

const StoreDownload = () => {
  return (
    <StoreSection>
      <StoreDownloadContainer>
        <StoreDownloadLeft data-animate-category='slideRight'>
          <p data-name="preamble-text">Get Our Aplication</p>
          <h3>You Can Easily Find This App!</h3>
          <p data-name="section-paragraph">
            I say chap that’s suing lavatory chip shop gosh off his smashing
            boot are you taking the piss posh loo brilliant.
          </p>
          <div data-name="store-icon-container">
            <img src={PlayStore} alt="play-store-icon" />
            <img src={AppStore} alt="app-store-icon" />
          </div>
        </StoreDownloadLeft>
        <StoreDownloadRight data-animate-category='slideup'>
          <img src={MobileMockUp} />
        </StoreDownloadRight>
      </StoreDownloadContainer>
    </StoreSection>
  );
};

export default StoreDownload;

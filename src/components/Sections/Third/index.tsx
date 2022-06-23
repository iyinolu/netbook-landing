import React from "react";
import {
  Card,
  CardsDisplayContainer,
  CardHeader,
  RatingsHighlight,
  RatingsHighlightContainer,
  RatingsJoinLink,
  CardHighlightContainer,
  CardHighlight,
  AwardLink,
  DiscoverContainer,
  DiscoverButton,
} from "./Achievement.styled";
import People from "../../../images/people.svg";
import GithubIcon from "../../../images/github-icon.png";
import Star from "../../../images/star.svg";
import Trophy from "../../../images/trophy.svg";
import BlueArrow from "../../../images/blue-arrow-right.svg";
import DarkArrow from "../../../images/black-arrow-right.svg";

const Achievement = () => {
  return (
    <CardsDisplayContainer>
      <Card>
        <div>
          <CardHeader>
            <img src={Star} alt="star-icon" />
            <span>4.8 Rating</span>
          </CardHeader>
          <RatingsHighlightContainer>
            <img src={People} alt="people-icon" />
            <RatingsHighlight>
              <span>+836k</span> Members
            </RatingsHighlight>
          </RatingsHighlightContainer>
          <p>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </p>
          <RatingsJoinLink>
            <span style={{ marginRight: "8px", fontSize: "16px" }}>
              Join Our Community
            </span>
            <img src={BlueArrow} alt="arrow" />
          </RatingsJoinLink>
        </div>
      </Card>

      <Card>
        <div>
          <CardHeader>
            <img src={Trophy} alt="star-icon" />
            <span>Awwwards</span>
          </CardHeader>
          <CardHighlightContainer>
            <img src={GithubIcon} alt="people-icon" />
            <CardHighlight>
              Bvest of <span>2021</span> on Github
            </CardHighlight>
          </CardHighlightContainer>
          <p>
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </p>
          <AwardLink>
            <span>Go To Awards</span>
            <img src={DarkArrow} alt="arrow" />
          </AwardLink>
        </div>
      </Card>
      <DiscoverContainer>
        <span>Our Achievement</span>
        <h2>We are Connecting You The Digital Life.</h2>
        <p>
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </p>
        <DiscoverButton>Discover me</DiscoverButton>
      </DiscoverContainer>
    </CardsDisplayContainer>
  );
};

export default Achievement;

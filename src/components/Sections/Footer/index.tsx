import React from "react";
import {
  FooterNavContainer,
  FooterNavSection,
  FooterNav,
  SubscriptionContainer,
  FooterNavColumns,
  SubscribeInputField,
  FooterBottom,
} from "./Footer.styled";
import LogoWhite from "../../../images/netbook-logo-white.svg";
import Twitter from "../../../images/twitter.svg";
import Instagram from "../../../images/instagram.svg";
import Facebook from "../../../images/facebook.svg";
import LinkedIn from "../../../images/Linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <FooterNavSection>
        <FooterNavContainer>
          <FooterNav>
            <FooterNavColumns>
              <span>Home</span>
              <ul>
                <li>Home</li>
                <li>Community</li>
                <li>Events</li>
                <li>Contacts</li>
              </ul>
            </FooterNavColumns>
            <FooterNavColumns>
              <span>Resource</span>
              <ul>
                <li>Blog</li>
                <li>News</li>
                <li>Guides</li>
                <li>Help Center</li>
              </ul>
            </FooterNavColumns>
            <FooterNavColumns>
              <span>Community</span>
              <ul>
                <li>New Feed</li>
                <li>Profile</li>
                <li>Friends</li>
                <li>Forum</li>
              </ul>
            </FooterNavColumns>
            <FooterNavColumns>
              <span>Main Links</span>
              <ul>
                <li>Members</li>
                <li>Activity</li>
                <li>Groups</li>
                <li>Private Groups</li>
              </ul>
            </FooterNavColumns>
          </FooterNav>
          <SubscriptionContainer>
            <h3>Subscribe Cirkle Newsletter</h3>
            <p>
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <SubscribeInputField>
              <input placeholder="Email Address" />
              <button>Subscribe</button>
            </SubscribeInputField>
          </SubscriptionContainer>
        </FooterNavContainer>
      </FooterNavSection>
      <FooterBottom>
        <div data-name="footer-bottom-conatainer">
          <span>Besnik Creative Agency.</span>
          <img src={LogoWhite} alt="logo" />
          <div date-name="social-contacts">
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
      </FooterBottom>
    </footer>
  );
};

export default Footer;

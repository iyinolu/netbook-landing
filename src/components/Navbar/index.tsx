import React from "react";
import Logo from "../../images/netbook-logo.svg";
import { NavBar, NavLinks } from "./Navbar.styled";
import { NavBarInnerDiv } from "./Navbar.styled";
import { NavButton } from "./Button.styled";

const Navigation = () => {
  return (
    <NavBar>
      <NavBarInnerDiv>
        <div>
          <img alt="logo" src={Logo} />
          <NavLinks>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Events</a>
            </li>
          </NavLinks>
        </div>
        <div>
          <NavButton>
              Login
          </NavButton>
        </div>
      </NavBarInnerDiv>
    </NavBar>
  );
};

export default Navigation;

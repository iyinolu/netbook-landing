import styled from "styled-components";
import { breakpoints } from "../../../breakpoints";
import { ButtonFilled } from "../../Resuables/Button";


export const CardsDisplayContainer = styled.div`
  max-width: 1147px;
  margin: 0 auto 81px auto;
  display: flex;
  align-items: center;
  padding: 0 23px 0 23px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;

  @media ${breakpoints.medium} {
    /* min-height: 732px; */
    justify-content: space-around;
  }
`;

export const Card = styled.div`
  width: 336px;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(185, 185, 185, 44%);
  border-radius: 14px;
  margin: 30px 0;
  p {
    font-size: 16px;
    color: var(--text-light-gray);
    font-weight: 400;
    margin-bottom: 40px;
    width: 274px;
  }
  div {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 32px;
  img {
    margin-right: 10px;
  }
  span {
    font-size: 20px;
    color: var(--primary-dark-blue);
  }
`;

export const CardHighlightContainer = styled.div`
  margin-bottom: 27px;
  img {
    margin-left: -12px;
    margin-top: 6px;
  }
`;

export const CardHighlight = styled.span`
  font-size: 16px;
  font-weight: 300;
  span {
    color: var(--primary-blue);
  }
`;

// RATINGS CARD COMPONENTS
export const RatingsHighlightContainer = styled.div`
  margin-bottom: 27px;
  img {
    margin-left: -19px;
    margin-top: 6px;
  }
`;

export const RatingsHighlight = styled.span`
  font-size: 16px;
  font-weight: 300;
  span {
    color: var(--primary-blue);
  }
`;

export const RatingsJoinLink = styled.div`
  span {
    color: var(--primary-blue);
    font-size: 16px;
    font-weight: 400;
    margin-right: 8px;
  }
  img {
    margin-top: 3px;
  }
`;

// AWARD CARD COMPONENTS
export const AwardLink = styled.div`
  span {
    color: var(--primary-dark-blue);
    font-size: 16px;
    font-weight: 400;
    margin-right: 8px;
  }
  img {
    margin-top: 3px;
  }
`;

export const DiscoverContainer = styled.div`
  max-width: 381px;
  height: 322px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: baseline;
  margin: 30px 0;

  span {
    font-size: 18px;
    color: var(--primary-blue);
    font-weight: 400;
  }
  h2 {
    font-size: 36px;
    font-weight: 700;
    color: var(--primary-dark-blue);
  }
  p {
    font-size: 16px;
    color: var(--text-light-gray);
    font-weight: 400;
    max-width: 365px;
  }
`;

export const DiscoverButton = styled(ButtonFilled)`
  width: 192px;
  height: 58px;
`;

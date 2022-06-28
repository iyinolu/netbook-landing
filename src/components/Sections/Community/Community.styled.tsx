import styled from "styled-components";
import { breakpoints } from "../../../breakpoints";

export const CommunitySection = styled.section`
  background: linear-gradient(
    0deg,
    rgba(241, 246, 253, 0) 1.63%,
    #f1f6fd 20.5%,
    #f1f6fd 58.57%,
    #ffffff 100%
  );
  min-height: 1069px;
  div {
    :first-child[data-name="community-container"] {
      max-width: 1147px;
      margin: 0 auto 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 23px 41px 23px;
    }
  }
`;

export const CommunityHeading = styled.div`
  text-align: center;
  margin-bottom: 54px;
  span {
    color: var(--primary-blue);
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 9px;
    display: inline-block;
  }
  h2 {
    color: var(--primary-dark-blue);
    font-size: 36px;
    line-height: 36px;
    font-weight: 700px;
    margin-bottom: 19px;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    max-width: 421px;
  }
`;

export const CommunityContent = styled.div`
  display: grid !important;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 44px;

  @media ${breakpoints.large} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CommunityCard = styled.div`
  display: flex;
  justify-content: start;
  max-width: 522px !important;
  flex-direction: row !important;
  min-height: 182px;
  align-items: center;
  background: white;
  border-radius: 14px;
  padding: 26px;
  gap: 23px;

  div[data-name="card-container"] {
    display: flex;
  }
  &[data-col="1"] {
    flex: 2;
  }
  &[data-col="2"] {
    flex: 3;
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-size: 21px;
    font-weight: 400;
    color: var(--primary-dark-blue);
    max-width: 209px;
    margin-bottom: 14px;
  }
  p {
    font-size: 16px;
    color: var(--paragraph-color-1);
    max-width: 315px;
    font-weight: 300;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

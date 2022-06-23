import styled from "styled-components";

export const CommunitySection = styled.section`
  background: linear-gradient(
    0deg,
    rgba(241, 246, 253, 0) 1.63%,
    #f1f6fd 20.5%,
    #f1f6fd 58.57%,
    #ffffff 100%
  );
  height: 1069px;
  margin-top: 55px;
  div {
    :first-child[data-name="community-container"] {
      max-width: 1170px;
      margin: 0 auto 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const CommunityHeading = styled.div`
  text-align: center;
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 44px;
`;

export const CommunityCard = styled.div`
  display: flex;
  justify-content: start;
  max-width: 522px !important;
  flex-direction: row !important;
  height: 182px;
  width: 522px;
  align-items: center;
  background: white;
  border-radius: 14px;

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
    font-size: 24px;
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
    margin: 26px;
  }
`;

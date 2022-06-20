import styled from "styled-components";
import ListPointer from "../../../images/list-pointer.svg";

export const SecondSectionContainer = styled.section`
  max-width: 1170px;
  margin: 72px auto 0 auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 576px;
`;
export const WhyNetbookContainer = styled.div`
  flex: 1;
  height: 406px;
  p {
    width: 70%;
    :first-child {
      font-size: 18px;
      color: var(--primary-blue);
      font-weight: 400;
    }
    :nth-child(3) {
      font-size: 16px;
      font-weight: 300;
      color: var(--paragraph-color-1);
      margin-bottom: 36px;
    }
  }
  h2 {
    width: 70%;
    font-size: 36px;
    font-weight: 700;
    color: var(--primary-dark-blue);
    margin-bottom: 16px;
  }
  ul {
    height: 86px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  li {
    display: flex;
    align-items: center;
    ::before {
      content: url(${ListPointer});
      display: inline-block;
      margin: 5px 11px 0 0;
    }
  }
`;
export const PictureGridContainer = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  div {
    :first-child {
      top: 280px;
      right: 10px;
    }
    :nth-child(2) {
      right: 10px;
    }
    :nth-child(3) {
      top: 72px;
    }
  }
  img {
    border-radius: 10px;
  }
`;

export const PictureContainer = styled.div`
  position: absolute;
`;
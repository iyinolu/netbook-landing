import styled from "styled-components";
import ListPointer from "../../../images/list-pointer.svg";

export const SecondSectionContainer = styled.section`
  max-width: 1147px;
  margin: 72px auto 0 auto;
  padding: 0 23px 0 23px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 576px;
  flex-direction: column;
  gap: 42px;
`;
export const WhyNetbookContainer = styled.div`
  flex: 1;
  min-height: 406px;
  p {
    width: 70%;
    :first-child {
      font-size: 16px;
      color: var(--primary-blue);
      font-weight: 400;
      margin-bottom: 21px;
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
  display: grid;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  div {
    :first-child {
      grid-column: 2;
      grid-row: 2 / 3;
    }
    :nth-child(2) {
      grid-column: 2;
      grid-row: 1 / 2;
    }
    :nth-child(3) {
      display: flex;
      grid-column: 1;
      grid-row: 1 / 3;
      align-items: center;
    }
  }
  img {
    border-radius: 10px;
    width: 100%;
  }
`;

export const PictureContainer = styled.div`
  /* position: absolute; */
`;

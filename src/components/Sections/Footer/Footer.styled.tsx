import styled from "styled-components";

export const FooterNavSection = styled.div`
  height: 389px;
  display: flex;
  background-color: var(--footer-bg-color-1);
  align-items: center;
`;

export const FooterNavContainer = styled.div`
  display: flex;
  max-width: 1170px;
  margin: 0 auto 0 auto;
  flex: 1;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex: 2;
`;
export const FooterNavColumns = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  span {
    :first-child {
      font-size: 20px;
      font-weight: 400;
      color: var(--text-white);
      margin-bottom: 22px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    height: 184px;
    justify-content: space-around;
  }
  li {
    font-size: 16px;
    font-weight: 300;
    color: var(--text-white);
    cursor: pointer;
  }
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--text-white);
  justify-content: space-between;
  h3 {
    font-size: 20px;
    font-weight: 400;
    width: 174px;
    line-height: 1.5;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
  }
`;

export const SubscribeInputField = styled.div`
  background: transparent;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  height: 48px;
  justify-content: space-between;
  button {
    background: white;
    border-radius: 11px;
    border-width: 0;
    width: 128px;
    margin: 0;
    cursor: pointer;
  }
  input {
    font-size: 14px;
    background: transparent;
    border-width: 0;
    outline: none !important;
    flex: 1;
    color: white;
    padding: 0 10px 0 24px;
  }
`;

export const FooterBottom = styled.div`
  background: var(--secondary-dark-blue);
  height: 96px;
  div[data-name="footer-bottom-conatainer"] {
    display: flex;
    max-width: 1170px;
    margin: 0 auto 0 auto;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    div {
        flex: 1;
      display: flex;
      max-width: 168px !important;
      min-width: 168px !important;
      justify-content: space-between;
    }
  }
  span {
      color: white;
      font-size: 14px;
  }
`;

import styled from "styled-components";
import { ButtonOutlined, ButtonFilled } from "../../Resuables/Button";
import { breakpoints } from "../../../breakpoints";

export const HeroPage = styled.section`
  background: linear-gradient(311.76deg, #d4e7fe -15.24%, #ffffff 78.85%);
  width: 100vw;
`;
export const Main = styled.div`
  display: flex;
  max-width: 1147px;
  margin: 72px auto 0 auto;
  padding: 0 23px 56px 23px;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.medium} {
    flex-direction: row;
  }

  div {
    :first-child {
      flex: 1;
    }
    :nth-child(2) {
      flex: 1;
      img {
        width: 94%;
      }
    }
  }
`;
export const Introduction = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
    color: var(--paragraph-color-1);
    font-weight: 300;
    margin-bottom: 42px;
  }
  div {
    :last-child {
      width: 348px;
      display: flex;
      justify-content: space-between;
      align-self: center;

      @media ${breakpoints.medium} {
        align-self: start;
      }
    }
  }
`;

export const CommunityBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 177px;
  padding: 14px;
  background-color: var(--secondary-blue);
  color: var(--primary-blue);
  font-size: 12px;
  border-radius: 8px;
`;
export const MainText = styled.h1`
  color: var(--primary-dark-blue);
  font-weight: 700;
  font-size: 56px;
  margin: 20px 0 18px 0;
`;
export const AboutButton = styled(ButtonFilled)`
  width: 167px;
  height: 62px;
`;

export const InviteButton = styled(ButtonOutlined)`
  width: 167px;
  height: 62px;
`;

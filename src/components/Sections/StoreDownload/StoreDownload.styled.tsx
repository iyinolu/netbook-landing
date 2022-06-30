import styled from "styled-components";
import { breakpoints } from "../../../breakpoints";

export const StoreSection = styled.section`
  background-color: var(--app-download-section-bg);
`;

export const StoreDownloadContainer = styled.div`
  display: flex;
  max-width: 1147px;
  margin: 0 auto;
  align-items: center;
  padding: 0 23px;
  flex-direction: column;

  @media ${breakpoints.medium} {
    flex-direction: row;
  }
`;

export const StoreDownloadLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 83px 0;
  p[data-name="preamble-text"] {
    color: var(--primary-blue);
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 36px;
    font-weight: 600;
    color: var(--primary-dark-blue);
    max-width: 351px;
    margin-bottom: 18px;
  }
  p[data-name="section-paragraph"] {
    font-size: 16px;
    font-weight: 300;
    color: var(--paragraph-color-1);
    max-width: 341px;
    margin-bottom: 36px;
  }
  div[data-name="store-icon-container"] {
    display: flex;
    align-items: center;
    align-self: center;

    @media ${breakpoints.medium} {
      align-self: start;
    }
  }
`;

export const StoreDownloadRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${breakpoints.medium} {
    align-self: self-end;
    img {
      margin-left: -32px;
    }
  }
`;

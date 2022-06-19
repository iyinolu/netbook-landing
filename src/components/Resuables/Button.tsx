import styled from "styled-components";

export const ButtonFilled = styled.button`
  background-color: var(--primary-blue);
  color: #ffffff;
  border-radius: 14px;
  border-color: var(--primary-blue);
`;

export const ButtonOutlined = styled.button`
  background-color: transparent;
  color: #217bf4;
  border: 1px solid var(--primary-blue);
  border-radius: 14px;
  &:hover {
    background-color: var(--secondary-blue);
  }
`;

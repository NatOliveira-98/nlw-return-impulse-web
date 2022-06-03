import styled, { keyframes } from "styled-components";

const spinnerRotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  font-size: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  svg {
    font-size: 1.6rem;

    animation: ${spinnerRotation} 1.3s linear infinite;
  }
`;

export { Container };
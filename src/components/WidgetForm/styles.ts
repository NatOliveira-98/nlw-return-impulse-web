import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.6rem;
  padding: 1.6rem;

  background-color: #18181B;
  border-radius: 1.6rem;

  box-shadow: 0 1rem 1.5rem -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  footer {
    color: #A1A1AA;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;

    a {
      color: #A1A1AA;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.6rem;

      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

export { Container };
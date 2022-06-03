import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 1.1rem;  
    
    @media (min-width: 768px) {
      bottom: 2.5rem;
      right: 3rem;
    }

  > .popover {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .panel {
      width: calc(100vw - 2rem);

      @media (min-width: 768px) {
        width: auto;
      }
    }
     
    > .button {
      width: 4.8rem;
      height: 4.8rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #8257E5;
      border-radius: 9999px;

      transition: all 0.3s linear;

      &:hover {
        width: 13.5rem;
        background-color: #996DFF;

        > span {
          width: auto;
          overflow: none;
        }
      }

      &:focus {
          outline: 2px solid #8257E5;
          outline-offset: 3px;
        }

      svg {
        color: #FFF;
        font-size: 2.4rem;
      }

      > span {
        width: 0;
        overflow-x: hidden;

        color: #FFF;
        font-weight: 500;

        span {
          padding-left: 8px;
        }
      }
    }
  }
`;

export { Container };
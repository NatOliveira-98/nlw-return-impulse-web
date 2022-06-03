import styled from "styled-components";

const TypeOfFeedbackHeader = styled.header`
    button.back-btn {
      position: absolute;
      top: 2rem;
      left: 2rem;

      color: #A1A1AA;
      background-color: transparent;

      transition: color 0.3s;

      &:hover {
        color: #F4F4F5;
      }

      .arrow-icon {
        font-size: 1.6rem;
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 8px;

      font-size: 2rem;
      font-weight: 500;
      line-height: 2.4rem;

      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
`;

const SelectFeedback = styled.div`
  width: 100%;

  display: flex;
  gap: 8px;

  margin-top: 3.2rem;
  margin-bottom: 4.8rem;

  button {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    width: 10rem;
    padding: 2rem;

    background-color: #27272A;
    border-radius: 1.6rem;
    border: 2px solid transparent;

    transition: border 0.3s;

    &:hover {
      border-color: #8257E5;
    }

    &:focus {
      border-color: #8257E5;
      outline: none;
    }

    span {
      color: #F4F4F5;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`;

const SendFeedback = styled.div`
  width: 100%;
  margin: 1.6rem;
  
  form {
    textarea {
      min-width: 30.4rem;
      width: 100%;
      min-height: 11.2rem;
      max-height: 15rem;

      padding: 8px 1.2rem;

      color: #F4F4F5;
      font-size: 1.4rem;
      line-height: 1.96rem;
      text-align: justify;

      background: transparent;
      border: 1px solid #52525B;
      border-radius: 4px;

      resize: none;
      transition: border 0.3s;

      &::placeholder {
        color: #A1A1AA;
      }

      &:focus {
        border-width: 1px;
        border-color: #8257E5;
        outline: none;
      }      

      &:hover {
        border-color: #8257E5;
      }

      &::-webkit-scrollbar {
        width: 4px;
      }
      
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: #52525B;
        border-radius: 9999px;
      }

      /* Firefox */
      scrollbar-width: thin;
      scrollbar-color: #52525B transparent;
    }

    footer {
      margin-top: 8px;

      display: flex;
      align-items: center;
      gap: 8px;

      button[type="submit"] {
        flex: 1;

        padding: 8px 7.4rem;

        background-color: #8257E5;
        border: 3px solid #18181B;
        border-radius: 8px;

        color: #FFF;
        font-size: 1.4rem;
        line-height: 2.4rem;
        text-align: center;

        transition: all 0.3s;

        &:hover {
          background-color: #996DFF;
        }

        &:focus {
          outline: 2px solid #8257E5;
        }

        &:disabled {
          opacity: 0.5;
        }

        &:disabled:hover {
          background-color: #8257E5;
          cursor: default;
        }
      }
    }
  }
`;

const FeedbackSentSuccessfully = styled.div`
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  button {
    margin-top: 2rem;
    padding: 8px 2.4rem;

    background-color: #27272A;
    border: transparent;
    border-radius: 4px;

    color: #F4F4F5;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    transition: background-color 0.3s;

    &:hover {
      background-color: #3F3F46;
    }

    &:focus {
    outline: 2px solid #8257E5;
    outline-offset: 3px;
  }
  }
`;

export { TypeOfFeedbackHeader, SelectFeedback, SendFeedback, FeedbackSentSuccessfully };

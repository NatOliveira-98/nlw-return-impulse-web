import styled from "styled-components";

const Container = styled.button`
  width: 4rem;
  height: 4.1rem;

  display: flex;
  justify-content: center;
  align-items: center;
        
  background-color: #27272A;
  border-radius: 4px;

  transition: all 0.3s;
  
  svg {
    margin-top: 1px;
    
    color: #F4F4F5;
    font-size: 2.4rem;
  }

  &:hover {
    background-color: #3F3F46;
  }

  &:focus {
    outline: 2px solid #8257E5;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const SavedScreenshot = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 2px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  border: transparent;
  border-radius: 4px;

  color: #A1A1AA;

  transition: color 0.3s;

  &:hover {
    color: #F4F4F5;
  }
`;

export { Container, SavedScreenshot };
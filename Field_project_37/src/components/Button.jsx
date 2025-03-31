import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: teal;
  color: black;
  padding: 12px 24px;
  border-radius: 25px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #004d4d;
    outline-offset: 2px;
  }
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

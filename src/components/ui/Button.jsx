import React from 'react';
import { StyledButton } from './ButtonStyles';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <StyledButton variant={variant} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

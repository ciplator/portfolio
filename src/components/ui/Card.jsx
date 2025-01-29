import React from 'react';
import { StyledCard } from './CardStyles';

const Card = ({ children, className = '' }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;

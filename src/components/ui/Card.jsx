import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors ${className}`}>
      {children}
    </div>
  );
};

export default Card;

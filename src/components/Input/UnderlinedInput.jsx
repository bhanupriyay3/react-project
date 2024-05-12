import React from 'react';

const UnderlinedInput = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} style={{ borderBottom: '2px solid #ccc' }} />;
};

export default UnderlinedInput;

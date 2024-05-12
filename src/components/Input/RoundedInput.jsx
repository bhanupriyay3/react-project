import React from 'react';

const RoundedInput = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} style={{ borderRadius: '10px' }} />;
};

export default RoundedInput;

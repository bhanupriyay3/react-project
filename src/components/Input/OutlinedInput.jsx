import React from 'react';

const OutlinedInput = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} style={{ border: '2px solid #ccc' }} />;
};

export default OutlinedInput;

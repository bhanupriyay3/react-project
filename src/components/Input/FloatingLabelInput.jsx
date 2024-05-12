
import React, { useState, useRef } from 'react';
import '../Input/Input.css'; // Import CSS for styling


const FloatingLabelInput = ({ label, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={`floating-label-input ${isFocused || inputValue ? 'active' : ''}`}>
      <input
        {...rest}
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <label onClick={handleLabelClick}>{label}</label>
    </div>
  );
};

export default FloatingLabelInput;

import React, { useRef, useEffect, useState} from 'react';
import FloatingLabelInput from '../../components/Input/FloatingLabelInput';
import { useTheme } from '../ThemeContext';



const ResponsiveForm = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  // Refs for focusable elements
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  // Add more refs for other input fields

  useEffect(() => {
    // Focus the first input field when the component mounts
    nameInputRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
  // Prevent default form submission behavior when Enter is pressed
  if (e.key === 'Enter') {
    e.preventDefault();
    // Handle keyboard navigation
    switch (e.target.type) {
      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'date':
      case 'time':
      case 'datetime-local':
      case 'month':
      case 'search':
      case 'url':
      case 'tel':
        // Move focus to the next input field on pressing Enter
        e.target.nextElementSibling ? e.target.nextElementSibling.focus() : e.target.blur();
        break;
      case 'file':
        // Since file inputs trigger a system dialog, just blur the focus
        e.target.blur();
        break;
      default:
        // Do nothing for other types of inputs
        break;
    }
  }
};
const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};
  return(
    <div className={`${darkMode ? 'dark' : 'light'}`}>
         <br/> <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    <div className="form-container container-xxl my-md-4 bd-layout w-50" >
      <form className="form">
        <div className="form-group mb-3">
          <label htmlFor="text">Name</label>
          <input
            ref={nameInputRef}
            className="form-control border-bottom"
            type="text"
            placeholder="Name"
            aria-label=".form-control-lg example"
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password:</label>
          <div className="input-group">
            <input
              ref={passwordInputRef}
              className="form-control"
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter password"
              aria-label=".form-control-lg example"
              onKeyDown={handleKeyDown}
            />
            
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email with floating label</label>
          <FloatingLabelInput class="form-control" label="Enter email" id="email" type="email" autoFocus={true}  aria-label=".form-control-lg example" />
         
        </div>

        <div className="form-group mb-3">
          <label htmlFor="number">Number:</label>
          <input class="form-control" type="number" id="number" placeholder="Enter number"  aria-label=".form-control-lg example"/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date">Date:</label>
          <input class="form-control" type="date" id="date"  aria-label=".form-control-lg example"/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="time">Time:</label>
          <input class="form-control" type="time" id="time" aria-label=".form-control-lg example" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="datetime-local">Datetime-Local:</label>
          <input class="form-control" type="datetime-local" id="datetime-local" aria-label=".form-control-lg example"/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="month">Month:</label>
          <input class="form-control" type="month" id="month" aria-label=".form-control-lg example"/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="search">Search:</label>
          <input class="form-control" type="search" id="search" placeholder="Search" aria-label=".form-control-lg example"/>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="url">URL:</label>
          <input class="form-control" type="url" id="url" placeholder="Enter URL" aria-label=".form-control-lg example" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="tel">Telephone:</label>
          <input class="form-control" type="tel" id="tel" placeholder="Enter phone number" aria-label=".form-control-lg example" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="file">File:</label>
          <input class="form-control" type="file" id="file" aria-label=".form-control-lg example"/>
        </div>

        <div class="mb-3">
       <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

        <div className="form-group mb-3">
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>

    </div>
  );
};

export default ResponsiveForm;

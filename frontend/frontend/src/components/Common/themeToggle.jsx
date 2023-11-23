import React from 'react';
import './themeToggle.css';

const ThemeToggle = ({ isLightTheme, handleToggle }) => {
    return (
      <div className='container'>
        <div className={`outline-none theme-toggle ${isLightTheme ? 'light-theme' : 'dark-theme'}`} onClick={handleToggle}>
          <div className="circle"></div>
        </div>
      </div>
    );
  };

export default ThemeToggle;
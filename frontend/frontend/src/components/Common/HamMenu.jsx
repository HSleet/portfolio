import React from 'react';
import { Link } from 'react-router-dom';
import './HamMenu.css';

const HamMenu = ({isLightTheme, isMenuOpen, toggleMenu}) => {

  return (
    <div className={`ham-menu ${isLightTheme ? 'bg-light-header-background':'bg-dark-header-background'}`} style={{left: isMenuOpen ? '0px' : '-320px'}}>
      <Link to="/" onClick={toggleMenu}>
        <div className='menu-item'>
          <div className='flex'>
            <div>
              <i className={`fa-solid fa-house fa-sm ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}></i>
            </div>
            <div>
              <p className={`px-2 ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}>Home</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="ham-menu__line"></div>
      <Link to="/projects"  onClick={toggleMenu}>
        <div className='menu-item'>
          <div className='flex'>
            <div>
              <i className={`fa-solid fa-briefcase fa-sm ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}></i>
            </div>
            <div>
              <p className={`px-2 ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}>Projects</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="ham-menu__line"></div>
      <Link to="/about"  onClick={toggleMenu}>
        <div className='menu-item'>
          <div className='flex'>
            <div>
              <i className={`fa-solid fa-user fa-sm ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}></i>
            </div>
            <div>
              <p className={`px-2 ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}>About</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="ham-menu__line"></div>
      <Link to="/contact"  onClick={toggleMenu}>
        <div className='menu-item'>
          <div className='flex'>
            <div>
              <i className={`fa-solid fa-phone fa-sm ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}></i>
            </div>
            <div>
              <p className={`px-2 ${isLightTheme ? 'text-light-body-background1': 'text-dark-body-title1'}`}>Contact</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HamMenu;

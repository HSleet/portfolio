import React from 'react';
import './HamMenu.css';

const HamMenu = ({isLightTheme, isMenuOpen}) => {

  return (
    <div className={`ham-menu ${isLightTheme ? 'bg-light-header-background':''}`} style={{left: isMenuOpen ? '0px' : '-320px'}}>
      <div className='menu-item'>
        <a href="">
          <div className='flex'>
            <div>
              <i class="fa-solid fa-house fa-sm"></i>
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </a>
      </div>
      <div className="ham-menu__line"></div>
      <div className='menu-item'>
        <a href="">
          <div className='flex'>
            <div>
              <i class="fa-solid fa-briefcase fa-sm"></i>
            </div>
            <div>
              <p>Projects</p>
            </div>
          </div>
        </a>
      </div>
      <div className="ham-menu__line"></div>
      <div className='menu-item'>
        <a href="">
          <div className='flex'>
            <div>
              <i class="fa-solid fa-user fa-sm"></i>
            </div>
            <div>
              <p>About</p>
            </div>
          </div>
        </a>
      </div>
      <div className="ham-menu__line"></div>
      <div className='menu-item'>
        <a href="">
          <div className='flex'>
            <div>
              <i class="fa-solid fa-user fa-sm"></i>
            </div>
            <div>
              <p>About</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HamMenu;

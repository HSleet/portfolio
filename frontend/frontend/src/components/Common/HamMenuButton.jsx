import React from 'react';
import './HamMenu.css';

const MobileNavMenuButton = ({openMenu, isLightTheme}) => {
    return (
        <div className="mobile-nav-menu-button">
            <div className='line-container' onClick={openMenu}>
                <div className={`line ${isLightTheme ? 'bg-light-header-details': 'bg-dark-header-details'} `}></div>
                <div className={`line ${isLightTheme ? 'bg-light-header-details': 'bg-dark-header-details'} `}></div>
                <div className={`line ${isLightTheme ? 'bg-light-header-details': 'bg-dark-header-details'} `}></div>
            </div>
        </div>
    );
};
export default MobileNavMenuButton;

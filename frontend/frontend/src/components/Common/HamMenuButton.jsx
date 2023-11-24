import React from 'react';
import './HamMenu.css';

const MobileNavMenuButton = ({handleMenuToggle, isLightTheme}) => {
    return (
        <div className="mobile-nav-menu-button">
            <div className='line-container' onClick={handleMenuToggle}>
                <div className={`line ${isLightTheme ? 'bg-light-header-details': 'bg-dark-header-details'} `}></div>
                <div className={`line ${isLightTheme ? 'bg-light-header-details': 'bg-dark-header-details'} `}></div>
                <div className={`line ${isLightTheme ? 'bg-light-header-details': 'bg-dark-header-details'} `}></div>
            </div>
        </div>
    );
};
export default MobileNavMenuButton;


import React, { useState } from 'react';
import ThemeToggle from './themeToggle';
import MobileNavMenuButton from './HamMenuButton';
import './Header.css';

const Header = ({ isLightTheme, toggleTheme, toggleMenu}) => {

    return (
        <div className={`header w-full drop-shadow-md ${isLightTheme ? 'bg-light-header-background' : 'bg-dark-header-background'}`} style={{ transition: 'background-color 0.5s ease', zIndex: 10 }}>
            <div className="space-x-16 flex h-full">
                <div className={`flex w-1/2`}>
                    <MobileNavMenuButton isLightTheme={isLightTheme} handleMenuToggle={toggleMenu}/>
                </div>
                <div className='w-1/2'>
                    <ThemeToggle className='theme-toggle' isLightTheme={isLightTheme} handleToggle={toggleTheme} />
                </div>
            </div>
        </div>
    );
};


export default Header;
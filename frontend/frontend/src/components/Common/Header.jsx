
import React, { useState } from 'react';
import ThemeToggle from './themeToggle';
import MobileNavMenuButton from './HamMenuButton';
import './Header.css';

const Header = ({ isLightTheme, handleToggle }) => {
    // const [isLightTheme, setIsLightTheme] = useState(true);
  
    // const handleToggle = () => {
    //   setIsLightTheme(!isLightTheme);
    // };

    return (
        <div className={`header w-full drop-shadow-md ${isLightTheme ? 'bg-light-header-background' : 'bg-dark-header-background'}`} style={{ transition: 'background-color 0.5s ease', zIndex: 10 }}>
            <div className="space-x-16 flex h-full">
                <div className={`flex w-1/2`}>
                    <MobileNavMenuButton isLightTheme={isLightTheme}/>
                </div>
                <div className='w-1/2'>
                    <ThemeToggle className='theme-toggle' isLightTheme={isLightTheme} handleToggle={handleToggle} />
                </div>
            </div>
        </div>
    );
};


export default Header;
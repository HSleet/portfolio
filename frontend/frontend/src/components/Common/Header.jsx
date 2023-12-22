
import React from 'react';
import ThemeToggle from './themeToggle';
import MobileNavMenuButton from './HamMenuButton';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLightTheme, toggleTheme, toggleMenu }) => {

    return (
        <div className={`header w-full drop-shadow-md ${isLightTheme ? 'bg-light-header-background' : 'bg-dark-header-background'}`} style={{ transition: 'background-color 0.5s ease' }}>
            <div className="flex h-full">
                <div className={`flex w-1/2 md:hidden`}>
                    <MobileNavMenuButton isLightTheme={isLightTheme} handleMenuToggle={toggleMenu} />
                </div>
                <div className={`nav-menu-container-md`}>
                    <Link to="/">
                        <div className='menu-item'>
                            <div className='flex'>
                                <div>
                                    <i className={`fa-solid fa-house fa-sm ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}></i>
                                </div>
                                <div>
                                    <p className={`px-2 ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}>Home</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="ham-menu__line"></div>
                    <Link to="/projects">
                        <div className='menu-item'>
                            <div className='flex'>
                                <div>
                                    <i className={`fa-solid fa-briefcase fa-sm ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}></i>
                                </div>
                                <div>
                                    <p className={`px-2 ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}>Projects</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="ham-menu__line"></div>
                    <Link to="/about">
                        <div className='menu-item'>
                            <div className='flex'>
                                <div>
                                    <i className={`fa-solid fa-user fa-sm ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}></i>
                                </div>
                                <div>
                                    <p className={`px-2 ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}>About</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="ham-menu__line"></div>
                    <Link to="/contact">
                        <div className='menu-item'>
                            <div className='flex'>
                                <div>
                                    <i className={`fa-solid fa-phone fa-sm ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}></i>
                                </div>
                                <div>
                                    <p className={`px-2 ${isLightTheme ? 'text-light-body-background1' : 'text-dark-body-title1'}`}>Contact</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='w-1/2'>
                    <ThemeToggle className='theme-toggle' isLightTheme={isLightTheme} handleToggle={toggleTheme} />
                </div>
            </div>
        </div>
    );
};


export default Header;
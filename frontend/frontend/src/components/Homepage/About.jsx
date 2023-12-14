
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = ({isLightTheme, shortBio}) => {

    return (
        <div className='flex flex-col'>
            <p className={`pt-20 pb-10 text-left font-sans text-lg ${isLightTheme ? 'text-light-body-text2' : 'text-dark-body-text1'} antialiased`} style={{ transition: 'color 0.5s ease' }}>{shortBio}
                {/* I'm a passionate software engineer boasting three years of hands-on experience ranging from meticulous QA automation and adept bug fixing to the seamless migration of software to advanced versions. My development journey has been shaped by a fusion of technical proficiency and creativity. Rooted in a foundation of electronics engineering, my journey into programming started as a hobby fueled by passion, and naturally, it has shaped my professional path ever since. */}
            </p>
            <div className='nav-buttons flex flex-col sm:flex-row justify-center items-center'>
                <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                    <Link to='/projects'>
                        <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                            Explore my work
                        </button>
                    </Link>
                </div>
                <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                    <Link to='/about'>
                        <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                            Know more about me
                        </button>
                    </Link>
                </div>
                <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                    <Link to='/contact'>
                        <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                            Get in touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;

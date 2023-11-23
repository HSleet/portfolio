
import React from 'react';
import './About.css';

const About = ({isLightTheme}) => {

    return (
        <div className='flex flex-col'>
            <p className={`pt-20 pb-10 text-left font-sans text-lg ${isLightTheme ? 'text-light-body-text2' : 'text-dark-body-text1'} antialiased`} style={{ transition: 'color 0.5s ease' }}>
                I'm a passionate software engineer boasting three years of hands-on experience ranging from meticulous QA automation and adept bug fixing to the seamless migration of software to advanced versions. My development journey has been shaped by a fusion of technical proficiency and creativity. Rooted in a foundation of electronics engineering, my journey into programming started as a hobby fueled by passion, and naturally, it has shaped my professional path ever since.
            </p>
            <div className='nav-buttons flex flex-col sm:flex-row justify-center items-center'>
                <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                    <a href='#' target='_blank' rel='noreferrer'>
                        <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                            Explore my work
                        </button>
                    </a>
                </div>
                <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                    <a className='' href='#' target='_blank' rel='noreferrer'>
                        <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                            Know more about me
                        </button>
                    </a>
                </div>
                <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                    <a href='#' target='_blank' rel='noreferrer'>
                        <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                            Get in touch
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;

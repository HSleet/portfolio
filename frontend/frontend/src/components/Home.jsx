import React, { useEffect, useState, useRef } from 'react';
import Header from './Common/Header';
import About from './About';
import HamMenu from './Common/HamMenu';
import './Home.css';

const Home = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [typedIntroduction, setTypedIntroduction] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    const introduction = "José Méndez.";

    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedIntroduction(introduction.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > introduction.length) {
        clearInterval(interval);
      }
    }, 50);
  }, []);

  const handleToggle = () => {
    setIsLightTheme(!isLightTheme);
  };

  const handleScrollDown = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: scrollRef.current.offsetTop + windowHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${isLightTheme ? 'text-light-text' : 'text-dark-text'}`} style={{ transition: 'background-color 0.5s ease' }}>
      <HamMenu isLightTheme={isLightTheme} />
      <Header isLightTheme={isLightTheme} handleToggle={handleToggle} />
      <div className='body-container flex flex-col justify-center items-center'>
        <div className={`justify-center items-center description-section  ${isLightTheme ? 'bg-light-body-background1' : 'bg-dark-body-background1'} px-8`}>
          <h1 className={`text-5xl title font-bold ${isLightTheme ? 'text-light-body-title1' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
            Hi! I'm <span> {typedIntroduction} </span>
          </h1>
          <h2 className={`subtitle ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
            Software Engineer
          </h2>
          <h2 className={`subtitle ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
            Full Stack Developer
          </h2>
        </div>
        <div className={`flex description-section ${isLightTheme ? 'bg-light-body-background2' : 'bg-dark-body-background2'} px-8 items-center`} ref={scrollRef}>
          <About isLightTheme={isLightTheme} />
        </div>
      </div>
      <button className={`scroll-button ${isLightTheme? 'bg-dark-header-details' : 'bg-light-header-details'}`} onClick={handleScrollDown}>
        <i class='fa-solid fa-chevron-down' style={{color: isLightTheme? '#312450': '#9A7197'}}></i>
      </button>
    </div>
  );
};

export default Home;

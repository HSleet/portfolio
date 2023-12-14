import React, { useEffect, useState, useRef } from 'react';
import About from './About';
import './Home.css';

const Home = ({isLightTheme, shortBio}) => {

  const [typedIntroduction, setTypedIntroduction] = useState('');
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const introduction = "Hi! I'm José Méndez.";

    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedIntroduction(introduction.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > introduction.length) {
        clearInterval(interval);
      }
    }, 50);
  }, []);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.pageYOffset < window.innerHeight / 2) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const handleScrollDown = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollRef.current.offsetTop + windowHeight;
    const maxScrollPosition = document.documentElement.scrollHeight - windowHeight;
    const targetScrollPosition = Math.min(scrollPosition, maxScrollPosition);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight / 2) {
      handleScrollDown();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  
  return (
    <div style={{ transition: 'background-color 0.5s ease' }}>
      <div className='body-container flex flex-col justify-center items-center'>
        <div className={`justify-center items-center description-section  ${isLightTheme ? 'bg-light-body-background1' : 'bg-dark-body-background1'} px-8`}>
          <h1 className={`text-5xl title font-bold text-center ${isLightTheme ? 'text-light-body-title1' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
            <span> {typedIntroduction} </span>
          </h1>
          <h2 className={`subtitle ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
            Software Engineer
          </h2>
          <h2 className={`subtitle ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
            Full Stack Developer
          </h2>
        </div>
        <div className={`flex description-section ${isLightTheme ? 'bg-light-body-background2' : 'bg-dark-body-background2'} px-8 items-center`} ref={scrollRef}>
          <About isLightTheme={isLightTheme} shortBio={shortBio}/>
        </div>
      </div>
      <button className={`scroll-button ${isLightTheme? 'bg-dark-header-details' : 'bg-light-header-details'}`} onClick={handleScroll}>
        <i className={`fa-solid chevron ${isAtTop ? 'fa-chevron-down' : 'fa-chevron-up'}`} style={{color: isLightTheme? '#312450': '#9A7197'}}></i>
      </button>
    </div>
  );
};

export default Home;

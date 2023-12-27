import React from 'react';
import ExpList from './expList';
import EducationList from './educationList';
import './AboutMe.css';

const AboutMe = ({isLightTheme, userInfo}) => {
  const paragraphs = userInfo.extended_bio ? userInfo.extended_bio.split('\r\n\r\n') : [];
  let expList;
  if (userInfo.job_experience) {
    expList = <ExpList isLightTheme={isLightTheme} expList={userInfo.job_experience}/>
  }
  let education;
  if (userInfo.education) {
    education = <EducationList isLightTheme={isLightTheme} education={userInfo.education}/>
  }

  return (
    <div className={`about-me ${isLightTheme? 'bg-light-body-background1' : 'bg-dark-body-background1'}`}>
      <div className={`bio-container ${isLightTheme? 'text-light-body-title2' : 'text-dark-body-title2'}`}>
        <h1 className='about-title'>About me</h1>
        <h2 className='about-subtitle'>Hello! I'm {userInfo.full_name}.</h2>
        <div className='bio'>
            {paragraphs.map((paragraph, index) => (
                <p className='bio-paragraph' key={index}>{paragraph}
                </p>
            ))}
        </div>
      </div>
      <div className='experiences'>
        <div className={`work-experience bg-opacity-90 ${isLightTheme? 'bg-light-body-background2' : 'bg-dark-body-background2'}`}>
          <i className={`fas fa-briefcase text-center text-4xl ${isLightTheme ? 'text-light-body-title2' : 'text-dark-body-title2'}`}></i>
          <h1 className={`work-experience-title ${isLightTheme? 'text-light-body-title2' : 'text-dark-body-title2'}`}>Work Experience</h1>
          <div className='work-experience-container'>
            {expList}
          </div>
        </div>
        <div className={`education bg-opacity-30 ${isLightTheme? 'bg-light-body-background3' : 'bg-dark-body-background3'}`}>
          <i className={`fas fa-graduation-cap text-center text-4xl ${isLightTheme ? 'text-light-body-title2' : 'text-dark-body-title2'}`}></i>
          <h1 className={`education-title ${isLightTheme? 'text-light-body-title2' : 'text-dark-body-title2'}`}>Education</h1>
          <div className='work-experience-container'>
            {education}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

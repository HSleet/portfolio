import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ isLightTheme, projects }) => {
  let projectCards;
  if (projects.length > 0) {
    projectCards = projects.map((project) => (
      <ProjectCard key={project.id} isLightTheme={isLightTheme} project={project} />
    ));
  } else {
    projectCards = (
      <div className='projects-loading max-w-lg'>
        <h1 className={`empty-message font-sans text-xl ${isLightTheme ? 'text-light-body-text1' : 'text-dark-body-text1'}`}>Looks like we're starting with a blank canvas here! I'm eager to fill this space with exciting projects and accomplishments. Stay tuned for updates on my latest ventures and contributions. In the meantime, feel free to explore other sections of my portfolio. Cheers to future endeavors!</h1>
      </div>
    );
  } 

  return (
    <div className={`projects-container ${isLightTheme ? 'bg-light-body-background1': "bg-dark-body-background1"}`}>
      <div className='title-container'>
        <h1 className={`projects-title ${isLightTheme ? 'text-light-body-title1': "text-dark-body-title1"}`} style={{ transition: 'color 0.5s ease' }}>Projects</h1>
        <p className={`projects-subtitle ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>
          Independent projects I've worked on in my free time.
        </p>
      </div>
      <div className='projects-list'>
        {projectCards}
      </div>
    </div>
  );
};

export default Projects;

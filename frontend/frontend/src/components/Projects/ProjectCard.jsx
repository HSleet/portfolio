import React from 'react';
import './Projects.css';

const ProjectCard = ({isLightTheme, project}) => {
    let projectTitle = project.project_title;
    let projectShortDescription = project.short_description;
    let projectSkills;
    if (project.skills.length > 0) {
        projectSkills = project.skills.map((skill) => (
            <div key={skill.id} className={`project-tag-container ${isLightTheme? 'bg-dark-highlight' : 'bg-dark-highlight'}`}>
                <span className={`project-tag font-sans ${isLightTheme ? 'text-light-body-text1' : 'text-light-body-text1'}`}>{skill.skill}</span>
            </div>
        ));
    } else {
        projectSkills = (
            <span className={`project-tag font-sans text-sm ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-text3'}`}>No skills listed</span>
        );
    }
    let imageSrc;
    if (project.images.length > 0) {
        imageSrc = project.images[0].image;
    } else {
        imageSrc = 'https://via.placeholder.com/300x150';
    }

    return (
        <div className={`card-container rounded-lg overflow-hidden ${isLightTheme ? 'bg-light-body-background2' : 'bg-dark-body-background2'}`}>
            <div className='project-image w-full'>
                <img src={imageSrc} alt="Project" className="pj-image" />
            </div>
            <div className='project-info'>
                <h1 className={`project-title font-sans ${isLightTheme ? 'text-light-body-title1' : 'text-dark-body-title1'}`}>{projectTitle}</h1>
                <p className={`project-description text-justify px-2 font-sans text-base ${isLightTheme ? 'text-light-body-text1' : 'text-dark-body-text1'}`}> {projectShortDescription}</p>
                <div className={`project-tags`}>
                    <div className='project-tags-container'>
                        {projectSkills}
                    </div>
                </div>
                {/* TODO: disable buttons when no url is provided */}
                <div className='project-links'>
                    <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                        <a href={project.github_repo} className={`project-link font-sans text-sm ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-text3'}`}>
                            <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                                Github repo
                            </button>
                        </a>
                    </div>
                    <div className={`button-container ${isLightTheme ? 'bg-light-body-button': 'bg-dark-body-button'}`}>
                        <a href={project.url} className={`project-link font-sans text-sm ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-text3'}`}>
                            <button className={`nav-button font-sans ${isLightTheme ? 'text-light-body-text4' : 'text-dark-body-text1'}`} style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}>
                                Live demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

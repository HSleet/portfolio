import React from "react";
import "./AboutMe.css";

const ExpListElement = ({isLightTheme, exp}) => {
    let gradDate = new Date(exp.graduation_date);
    

    let formattedGradDate = `${gradDate.toLocaleString('en-US', { month: 'short' })} ${gradDate.getFullYear()}`;
    // let formattedEnd = `${end.toLocaleString('en-US', { month: 'short' })} ${end.getFullYear()}`;

    return (
        <div className={`exp-list-element ${isLightTheme? 'bg-light-body-background3 bg-opacity-30': 'bg-dark-body-background1 bg-opacity-40'}`}>
            <div className={`exp-list-element-title ${isLightTheme? 'text-light-body-title2' : 'text-dark-body-title2'}`}>
                <h3>{exp.title}</h3>
            </div>
            <div className={`exp-list-element-institution ${isLightTheme? 'text-light-body-text2' : 'text-dark-body-text3'}`}>
                {exp.institution}
            </div>
            <div className={`exp-list-element-grad ${isLightTheme? 'text-light-body-text2' : 'text-dark-body-text3'}`}>
                {formattedGradDate}
            </div>
        </div>
    );
}

export default ExpListElement;
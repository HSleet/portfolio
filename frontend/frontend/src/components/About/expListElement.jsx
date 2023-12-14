import React from "react";
import "./AboutMe.css";

const ExpListElement = ({isLightTheme, exp}) => {
    let start = new Date(exp.start_date);
    let end = new Date(exp.end_date);

    let formattedStart = `${start.toLocaleString('en-US', { month: 'short' })} ${start.getFullYear()}`;
    let formattedEnd = `${end.toLocaleString('en-US', { month: 'short' })} ${end.getFullYear()}`;

    let formattedPeriod = `${formattedStart} - ${formattedEnd}`;
    return (
        <div className={`exp-list-element ${isLightTheme? 'bg-light-body-background4': 'bg-dark-body-background4'}`}>
            <div className={`exp-list-element-title ${isLightTheme? 'text-light-body-title2' : 'text-dark-body-title2'}`}>
                <h3>{exp.title}</h3>
            </div>
            <div className={`exp-list-element-company ${isLightTheme? 'text-light-body-text2' : 'text-dark-body-text3'}`}>
                {exp.company}
            </div>
            <div className={`exp-list-element-period ${isLightTheme? 'text-light-body-text2' : 'text-dark-body-text3'}`}>
                {formattedPeriod}
            </div>
        </div>
    );
}

export default ExpListElement;
import React from "react";
import EducationListElement from "./educatoinListElement.jsx";
import "./AboutMe.css";


const EducationList = ({isLightTheme, education}) => {
    let EducationListElements;
    if (education.length > 0) {
        EducationListElements = education.map((exp, index) => (
            <EducationListElement isLightTheme={isLightTheme} exp={exp} key={index}/>
        ));
    }
    else {
        EducationListElements = <p className={`text-light-body-text2`}>No education to show.</p>
    }

    return (
        <div className={`exp-list`}>
            {EducationListElements}
        </div>
    );
}

export default EducationList;
import React from "react";
import ExpListElement from "./expListElement";
import "./AboutMe.css";


const ExpList = ({isLightTheme, expList}) => {
    let expListElements;
    if (expList.length > 0) {
        expListElements = expList.map((exp, index) => (
            <ExpListElement isLightTheme={isLightTheme} exp={exp} key={index}/>
        ));
    }
    else {
        expListElements = <p className={`text-light-body-text2`}>No work experience to show.</p>
    }

    return (
        <div className={`exp-list`}>
            {expListElements}
        </div>
    );
}

export default ExpList;
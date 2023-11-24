import React, { useState } from "react";
import Header from "./components/Common/Header";
import HamMenu from "./components/Common/HamMenu";
import { useRoutes } from "react-router-dom";
import Home from "./components/Homepage/Home";
import ErrorPage from "./components/Common/ErrorPage";
import Projects from "./components/projects/Projects";


const Base = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(true);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    let routes = useRoutes([
        {
            path: "/",
            element: <Home isLightTheme={isLightTheme}/>
        },
        {
            path: "/projects",
            element: <Projects isLightTheme={isLightTheme}/>
        },
        {
            path: "*",
            element: <ErrorPage isLightTheme={isLightTheme}/>
        },
        
    ]);
    
    return (
        <div className={`base ${isLightTheme ? "bg-light-background" : ""}`}>
        <Header
            isLightTheme={isLightTheme}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
        />
        <HamMenu isLightTheme={isLightTheme} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="base__content">{routes}</div>
        </div>
    );
    }

export default Base;
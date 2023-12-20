import React, { useState, useEffect } from "react";
import Header from "./components/Common/Header";
import HamMenu from "./components/Common/HamMenu";
import ErrorPage from "./components/Common/ErrorPage";
import { useRoutes } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/About/AboutMe";
import Contact from "./components/Contact/Contact";
import axios from 'axios';


const Base = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmptyResponse, setIsEmptyResponse] = useState(false);

    useEffect(() => {
        if (userInfo.length === 0) {
            const apiUrl = process.env.REACT_APP_DEBUG === "True" ? "http://localhost:8000/api/users/" : "https://portfolio.hsleet.com/api/users/";
            axios.get(apiUrl)
                .then(response => {
                    if (response.data.length === 0) {
                        setIsEmptyResponse(true);
                        console.log('No data available');
                    } else {
                        const userData = response.data[0];
                        setUserInfo(userData);
                    }
                    setIsLoading(false);
                });
        }
    }, [userInfo]);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    let routes = useRoutes([
        {
            path: "/",
            element: <Home isLightTheme={isLightTheme} shortBio={userInfo.small_bio}/>
        },
        {
            path: "/projects",
            element: <Projects isLightTheme={isLightTheme} projects={userInfo.projects}/>
        },
        {
            path: "/about",
            element: <AboutMe isLightTheme={isLightTheme} userInfo={userInfo}/>
        },
        {
            path: "/contact",
            element: <Contact isLightTheme={isLightTheme} userInfo={userInfo}/>
        },
        {
            path: "*",
            element: <ErrorPage isLightTheme={isLightTheme}/>
        },

        
    ]);
    

    if (isLoading) {
        return (
            <div>
                <Header
                    isLightTheme={isLightTheme}
                    toggleMenu={toggleMenu}
                    toggleTheme={toggleTheme}
                />
                <HamMenu isLightTheme={isLightTheme} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <div className="base__content">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }

    if (isEmptyResponse) {
        return (
            <div>
                <Header
                    isLightTheme={isLightTheme}
                    toggleMenu={toggleMenu}
                    toggleTheme={toggleTheme}
                />
                <HamMenu isLightTheme={isLightTheme} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <div className="base__content">
                    <div className="empty-content"></div>
                </div>
            </div>
        )
    }

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
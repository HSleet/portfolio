import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = ({isLightTheme}) => {
  return (
    <div className={`error-page ${isLightTheme? 'bg-light-body-background1 text-light-body-text1': 'bg-dark-body-background2 text-dark-body-text1'} `}>
      <h1>Oops! Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or go back to the <Link to="/">homepage</Link>.</p>
    </div>
  );
};

export default ErrorPage;

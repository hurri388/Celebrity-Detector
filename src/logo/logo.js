import React from 'react';
import './logo.css';
import logo from './logo.png';
import logo1 from './GitHub_Logo.png';

function Logo() {

    return (<a href="https://github.com/hurri388">
        <img alt='logo' src={logo} width="60px" height="auto" /><br/>
        <img alt='logo1' src={logo1} width="60px" height="auto"/>
        </a>);

};

export default Logo;
import React from 'react';
import style from './index.module.css';
import PhoneOne from '../../asset/PhoneOne.jpeg';
import {Link} from "react-router-dom";
import About from "../../pages/aboutUs";

const Navbar = () => {
    return (
        <div className={style.headerContent} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={style.container}>
                <img src={PhoneOne} alt="PhoneOne Logo" className={style.phoneLogo} />
                <p className={style.appName}>Contact_Made_Easy</p>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px'}}>
                <Link to={"/home"}>HOME</Link>
                <Link to={"/about"}>ABOUT</Link>
                <a href="features.html">FEATURES</a>
                <a>CONTACT US</a>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
                <a href="login.html">LOGIN</a>
                <a href="signUpPage.html" className={style.signup}>SIGNUP</a>
            </div>
        </div>
    );
}

export default Navbar;

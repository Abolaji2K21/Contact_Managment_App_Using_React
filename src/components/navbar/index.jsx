import React from 'react';
import style from './index.module.css';
import PhoneOne from '../../asset/PhoneOne.jpeg';

const Navbar = () => {
    return (
        <div className={style.headerContent} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={style.container}>
                <img src={PhoneOne} alt="PhoneOne Logo" className={style.phoneLogo} />
                <p className={style.appName}>Contact_Made_Easy</p>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '50px'}}>
                <a href="index.html">HOME</a>
                <a href="about_us.html">ABOUT</a>
                <a href="features.html">FEATURES</a>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px'}}>
                <a href="login.html">LOGIN</a>
                <a href="signUpPage.html" className={style.signup}>SIGNUP</a>
            </div>
        </div>
    );
}

export default Navbar;

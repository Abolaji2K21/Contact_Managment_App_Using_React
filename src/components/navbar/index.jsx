import React, {useState} from 'react';
import Hamburger from 'react-hamburger-menu'
import style from './index.module.css';
import PhoneOne from '../../asset/PhoneOne.jpeg';
import {Link} from "react-router-dom";
import About from "../../pages/aboutUs";

const Navbar = () => {

    const isMobile = window.innerWidth <= 1080;
    const [isOpen, setIsOpen] = useState(false);

    // notdone
    return (
        <>
        <div className={style.headerContent} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={style.container}>
                <img src={PhoneOne} alt="PhoneOne Logo" className={style.phoneLogo} />
                <p className={style.appName}>Contact_Made_Easy</p>
            </div>

            {isMobile ? (
                <>
                    <div className={style.hamburger} onClick={() => setIsOpen(!isOpen)}>
                        <Hamburger toggled={isOpen}/>
                    </div>
                    {isOpen && (
                        <div className={style.mobileMenu}>
                            <div className={style.links}>
                                <Link to={"/home"}>HOME</Link>
                                <Link to={"/about"}>ABOUT</Link>
                                <Link to={"/features"}>FEATURES</Link>
                                <Link to={"/contact-Us"}>CONTACT US</Link>
                            </div>
                            <div className={style.Authentication}>
                                <a href="login.html">LOGIN</a>
                                <a href="signUpPage.html" className={style.signup}>SIGNUP</a>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={style.links}>
                    <Link to={"/home"}>HOME</Link>
                        <Link to={"/about"}>ABOUT</Link>
                        <Link to={"/features"}>FEATURES</Link>
                        <Link to={"/contact-Us"}>CONTACT US</Link>
                    </div>
                    <div className={style.Authentication}>
                        <a href="login.html">LOGIN</a>
                        <a href="signUpPage.html" className={style.signup}>SIGNUP</a>
                    </div>
                </>
            )}

            {/*<div className={style.links}>*/}
            {/*    <Link to={"/home"}>HOME</Link>*/}
            {/*    <Link to={"/about"}>ABOUT</Link>*/}
            {/*    <Link to={"/features"}>FEATURES</Link>*/}
            {/*    <Link to={"/contact-Us"}>CONTACT US</Link>*/}
            {/*</div>*/}

            {/*<div className={style.Authentication}  >*/}
            {/*    <a href="login.html">LOGIN</a>*/}
            {/*    <a href="signUpPage.html" className={style.signup}>SIGNUP</a>*/}
            {/*</div>*/}
        </div>
        </>
    );
}

export default Navbar;



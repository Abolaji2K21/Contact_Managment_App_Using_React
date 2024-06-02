import React from 'react';
import style from "./index.module.css";
import iphoneLogo from "../../../asset/iphone-screen.png";
import appStore from "../../../asset/appstore.png";
import playStore from "../../../asset/playstore.png";


const Hero = () => {
    return (
            <div className={style.heroSection}>
                <div>
                    <h1> Best Contact Management App <span style={{color: '#ffffff', fontSize: '15px', display: 'block'}}>
				This awesome template is designed by <a href="https://github.com/Abolaji2K21" target="_blank"
                                                        rel="noreferrer" className="weblink">In-Vex-Tor-BeeJay</a></span>
                    </h1>
                    <p> Welcome to ContactMadeEasy – your go-to platform for hassle-free contact management.<br/>
                        With ContactMadeEasy, organize all your contacts effortlessly, streamline communication.<br/>
                        Stay connected with ease. Simplify your life and never miss an important connection again.<br/>
                        Get started today!. <br/></p>
                    <img src={appStore} alt="appStore_Logo,"/>
                    <img src={playStore} alt="playStore_Logo,"/>
                </div>
                <img src={iphoneLogo} alt="Iphone_Logo"/>
            </div>
    );
}

export default Hero;

import React from 'react';
import inst from "../../asset/insta.png"
import web from "../../asset/web.png"
import twitter from "../../asset/twitter.png"
import youtube from "../../asset/youtube.png"
import style from "./index.module.css"
import PhoneOne from "../../asset/PhoneOne.jpeg";
import send from "../../asset/send.png"







const Footer = () => {
    return (
        <>
            <div className={style.footer} >
                <div>
                    <div style={{display: "flex", alignItems: "center"}} >
                        <img src={PhoneOne} alt="PhoneOne Logo" className={style.phoneLogo} />
                        <p style={{color: "violet", alignSelf:"end"}}>Contact_Made_Easy</p>
                    </div>
                    <p style={{color: 'violet'}}>Copyright © 2024 Contact_Made_Easy ltd. <br/>All rights reserved</p>
                    <div>
                        <img src={inst} alt="instagram logo"/>
                        <img src={web} alt="web logo"/>
                        <img src={twitter} alt="twitter logo"/>
                        <img src={youtube} alt="youtube logo"/>
                    </div>
                </div>

                <div style={{display: 'flex', gap: '100px'}}>
                    <div>
                        <h3 style={{color: 'violet'}}>Company</h3>
                        <p style={{color: 'violet' }}>About us</p>
                        <p style={{ color:'violet' }}>Blog</p>
                        <p style={{ color: 'violet' }}>Contact us</p>
                        <p style={{ color: 'violet' }}>Pricing</p>
                        <p style={{ color: 'violet' }}>Testimonials</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'violet' }}>Support</h3>
                        <p style={{ color: 'violet' }}>Help center</p>
                        <p style={{ color: 'violet' }}>Terms of service</p>
                        <p style={{ color: 'violet' }}>Legal</p>
                        <p style={{ color: 'violet' }}>Privacy policy</p>
                        <p style={{ color: 'violet' }}>Status</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'violet' }}>Stay up to date</h3>
                        <div style={{ background: '#515b60' }}>
                            <input className={style.LastFooter} type="text" placeholder="Your Email Address" style={{ background: 'transparent', border: 'none' }} />
                            <img style={{paddingTop:"-20px"}} src={send} alt="Last logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

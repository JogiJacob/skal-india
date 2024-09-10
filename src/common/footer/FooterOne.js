import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../elements/logo/Logo";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];
const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const FooterOne = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="logo">
                                        <Logo 
                                            image={`${process.env.PUBLIC_URL}/images/logo/logo_footer_skal.png`}
                                            image2={`${process.env.PUBLIC_URL}/images/logo/logo_footer_skal.png`}
                                        />
                                    </div>
                                    <h6 style={{color:"white"}}>Connecting Travel and Tourism Professionals all around the World</h6>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="rn-footer-widget">
                                            <div className="inner">
                                                <ul className="social-icon social-default justify-content-start">
                                                    <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                                    <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                                    <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                                    <li><Link to="linkdin.com"><FiYoutube /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemOne.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexOneLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">{footerIntemTwo.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexThreeLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div> */}
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemThree.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexTwoLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="widget-menu-bottom">
                                        <h4 className="title">{footerIntemFour.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexTwoLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div> */}
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                           
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterOne

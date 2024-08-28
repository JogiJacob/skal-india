import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from '../common/header/HeaderTopBar';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';
import ServiceTwo from '../elements/service/ServiceTwo';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutTwo from "../elements/about/AboutTwo";
import CounterUpTwo from "../elements/counterup/CounterUpTwo";

import Separator from "../elements/separator/Separator";
import TeamFour from '../elements/team/TeamFour';
import PricingTwo from '../elements/pricing/PricingTwo';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Typed from 'react-typed';


const BannerData = [
    {
        image: "/images/bg/join_skal_header.jpg",
        title: "Connecting Travel and Tourism Professionals all around the world",
        description: "Connecting Travel and Tourism Professionals all around the world"
    },
    {
        image: "/images/bg/header_overview_skal.jpg",
        title: "Join the largest Travel and Tourism Association",
        description: "Join the largest Travel and Tourism Association"
    },
    {
        image: "/images/bg/header_overview_skal.jpg",
        title: "SKÅL India",
        description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
    },
]

const Corporate = () => {
    return (
        <>
            <SEO title="Corporate" />
            <main className="page-wrapper">
                
                <div className="header-transparent-with-topbar">
                    <HeaderTopBar />
                    <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-not-transparent sticky" />
                </div>

                {/* Start Slider area  */}
                {/* <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/_54bb4131-aa89-4fb7-a0ed-ac643d41dfe8.jpeg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <h4 className="subtitle"><span className="theme-gradient">DIGITAL CONSULTING AGENCY</span></h4>
                                    <h1 className="title display-one">Join Corporate Meeting.</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Track your teams progress with mobile app.</li>
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Your teams progress with mobile app.</li>
                                    </ul>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Slider area  */}
               
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-650 bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>
                                <div className="container">
                                <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-7">
                                            <div className="inner text-start">
                                            {/* <video autoplay>
                                            <source src={`${process.env.PUBLIC_URL}/images/bg/Video-919.mp4`} type="video/mp4">
                                            </source>
                                            </video> */}
                                                <h5 className="title" dangerouslySetInnerHTML={{__html: data.title}} style={{fontSize:"40px"}}></h5>
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            {/* Start Elements Area  */}
            <div className="rwt-counterup-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    // subtitle = "About US"
                                    title = "Connecting Travel and Tourism Professionals all around the World"
                                    description = ""
                                />
                            </div>
                        </div>
                        <CounterUpTwo column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-2" textALign="text-center" />     
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Service Area  */}
                <div className="rn-service-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceTwo 
                            cardStyle = "card-style-1"
                            textAlign = "text-start"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <AboutTwo />

                <Separator />
                
                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="wrapper plr--65 plr_md--15 plr_sm--15">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Experts Team"
                                        description = ""
                                    />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* Start Elements Area  */}
                {/* <div className="rwt-pricing-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--35">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Pricing"
                                        title = "Our Pricing Plan."
                                        description = ""
                                    />
                            </div>
                        </div>
                        <PricingTwo />
                    </div>
                </div> */}
                {/* End Elements Area  */}

                {/* Start Call To Action Area  */}
                {/* <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div> */}
                {/* End Call To Action Area  */}

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Corporate

import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiActivity, FiGlobe, FiArchive, FiShoppingCart, FiZap} from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";
import { FcGlobe, FcMindMap, FcSms, FcVoicePresentation, FcMoneyTransfer, FcCompactCamera, FcConferenceCall, FcIpad, FcGraduationCap } from "react-icons/fc";

const ServiceList = [
    {
        icon: './images/bg/join_skal_mission.jpg',
        title: 'Our Mission',
        description: 'Through our leadership, professionalism and friendship, work together to achieve our Vision, maximise networking opportunities and support a responsible tourism industry.'
    },
    {
        icon: './images/bg/Individual_membership_img_skal.jpg',
        title: 'Why should I join Skål International?',
        description: 'Skål International offers local and global networking opportunities, access to the Global Skål Database to extend your business contacts and promotes seminars and conferences to strengthen the industry’s professionalism.'
    }
]

const ServiceList2 = [
    {
        icon: <FcGlobe/>,
        title: 'Global Professional Database',
        description: 'Find professional contacts to boost your business.'
    },
    {
        icon: <FcMindMap/>,
        title: 'Exclusive Opportunities',
        description: 'Choose among all the business events worldwide.'
    },
    {
        icon: <FcSms/>,
        title: 'Offers & Special Discounts',
        description: 'Access to exclusive offers and discount opportunities in the Travel and Tourism industry.'
    },
    {
        icon: <FcVoicePresentation/>,
        title: 'Local Activities',
        description: 'Be active in your local Club and National Committee.'
    },
    {
        icon: <FcConferenceCall/>,
        title: 'World Congress',
        description: 'A great networking opportunity at the annual World Congress, held in a different country in each year.'
    },
    {
        icon: <FcCompactCamera/>,
        title: 'Travel and Tourism Trade Shows',
        description: 'Access to the Skål International stand and B2B sessions.'
    },
    {
        icon: <FcIpad/>,
        title: 'Job Offers',
        description: 'Access to job opportunities in the Travel and Tourism industry.'
    },
    {
        icon: <FcGraduationCap/>,
        title: 'Academy & Training Activities',
        description: 'Professional training opportunities to improve skills and opportunities in the Travel and Tourism industry.'
    },
    {
        icon: <FcMoneyTransfer/>,
        title: 'Financial Aid',
        description: 'Access to exclusive financial aid programs for members.'
    }
]


const SkalMembership = () => {
    return (
        <>
            <SEO title="Skal Membership" />
            <Layout>
                <BreadcrumbOne 
                    title="Join Skal"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Join Skal"
                />
            <div className="main-content">
            <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title"><strong>Skål International</strong> is an Association of Travel and Tourism Professionals which encourages and creates a network of contacts around the world.</h3>

                                <div className="row row--15 service-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <div className={`service service__style--1 bg-color-blackest radius mt--25`}>
                                                <div className="icon">
                                                <img className="w-100" src={val.icon} alt={val.title}/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title w-600" style={{color:"#049dff"}} dangerouslySetInnerHTML={{__html: val.title}}></h4>
                                                    <p className="description b1 color-gray mb--0" style={{fontSize:"16px"}} dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-12 mt_md--40 mt_sm--40 mt--60">
                            <h3 className="title">Being part of <strong>Skål International</strong> offers you a wide range of benefits
                            </h3>
                            <div className="row row--15 service-wrapper">
                                {ServiceList2.map( (val , i) => (
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12" key={i}>
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <div className={`service service__style--1 bg-color-blackest radius mt--25`}>
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                                <div className="content">
                                                    <h4 className="title w-600" style={{color:"#049dff"}} dangerouslySetInnerHTML={{__html: val.title}}></h4>
                                                    <p className="description b1 color-gray mb--0" style={{fontSize:"16px"}} dangerouslySetInnerHTML={{__html: val.description}}></p>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                ))}
                            </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", marginTop:"40px"}}>
                            <a href="https://skal.org/join-skal" target="_blank">
                                <button className="btn btn-default btn-icon">Become Member</button>
                            </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Layout>
        </>
    )
}
export default SkalMembership;
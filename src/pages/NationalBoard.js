import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const teamData = [
    {
        image: 'sanjeev',
        name: 'Sanjeev Mehra',
        designation: 'President',
    },
    {
        image: 'venkat',
        name: 'Venkat Reddy',
        designation: 'Vice President 1',
    },
    {
        image: 'krishna',
        name: 'Krishna Gopalan',
        designation: 'Vice President 2',
    },
    {
        image: 'rohit',
        name: 'Rohit Hangal',
        designation: 'Secretary',
    },
    {
        image: 'Monik',
        name: 'Monik Dharamshi',
        designation: 'Treasurer',
    },
    {
        image: 'Shalini',
        name: 'Shalini Khanna Charles',
        designation: 'Director PR',
    },
    {
        image: 'Raja',
        name: 'Raja Gopaal Iyer',
        designation: 'Director YS',
    },
    {
        image: 'Varadaraj',
        name: 'M Varadaraj Prabhu',
        designation: 'Sr. Auditor',
    },
    {
        image: 'sheri',
        name: 'Dr Sheri Kurian',
        designation: 'Jr. Auditor',
    }
]


const NationalBoard = () => {
    return (
        <>
            <SEO title="NationaL Board" />
            <Layout>
                <BreadcrumbOne 
                    title="National Board"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="National Board"
                />
            <div className="main-content">
            <div className="rwt-team-area rn-section-gap">
        <div className="container">
            <div className="row row--30">
            {teamData.map((data, index) => (
                <div className="col-lg-3 col-md-6 col-12 mt--30" key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team team-style-two`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" style={{height:"300px"}}/>
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title" style={{color:"#204595"}}>{data.name}</h2>
                                    <h6 className="theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
        </div>
        </div>
        </div>
        </Layout>
        </>
    )
}
export default NationalBoard;
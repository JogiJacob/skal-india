import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Mysuru = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Mysuru"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Events"
                />
            <div className="main-content">
            <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
            <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/mysuru.jpg" alt="mysuru" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                       <table className="table table-striped table-hover table-bordered" style={{fontSize:"14px"}}>
                                <thead className="table-light">
                                    <tr>
                                    <th scope="col">Position</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
        <td>President</td>
        <td>Skl. C.A.Jayakumar</td>
        <td>+91 9845113578</td>
        <td>info@travelparkz.com</td>
    </tr>
    <tr>
        <td>Vice President </td>
        <td>Skl. S J Ashok</td>
        <td>+91 9844071630</td>
        <td>ashoksrp2002@yahoo.com  </td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Nagesh M L</td>
        <td>+91 9342104203</td>
        <td>amaynagesh@gmail.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Samarth Vaidya</td>
        <td>+91 9845865485</td>
        <td>info@mvgholidays.com</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Skl. Dhatri Bharadwaj M P</td>
        <td>+91 9972200908</td>
        <td>info@mediatreepr.in</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>TBA</td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
                                </table>
                                </ScrollAnimation>
                
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
export default Mysuru;
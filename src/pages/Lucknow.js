import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Lucknow = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Lucknow"
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
                            <img className="w-100" src="./images/about/lucknow.jpg" alt="coimbatore" />
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
        <td>Skl Sunil B Satyawakta</td>
        <td>9415024598</td>
        <td>satywakta.skal@gmail.com</td>
    </tr>
    <tr>
        <td>Vice President </td>
        <td>Skl. Sukesh Bahadur Satyawakta </td>
        <td>9415024599</td>
        <td>sukeshbahadur@hotmail.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Anupam Shukla</td>
        <td>8953165555</td>
        <td>anupam@holidaymakersworld.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Bhagwati Prasad Pant</td>
        <td>7275077701</td>
        <td>gm@thecentrum.in</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Skl. Jasleen Kaur Kohli</td>
        <td>9415210918</td>
        <td>jasleen.weldontravels@gmail.com</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>Skl. Sagar Srivastava</td>
        <td>9956700777</td>
        <td>opm.suites@levanahotels.com</td>
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
export default Lucknow;
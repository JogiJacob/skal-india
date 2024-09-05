import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Kolkata = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Kolkata"
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
                            <img className="w-100" src="./images/about/kolkata.jpg" alt="coimbatore" />
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
        <td>Skl. Amin Asghar</td>
        <td>98303 47452</td>
        <td>amin@aatravelzone.com</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl. Punam Arora</td>
        <td>9831107595</td>
        <td>punam_southwind@yahoo.com</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Phalguni Parikh</td>
        <td>9830008505</td>
        <td>phalguni.parikh@itq.in/phalguni.parikh@hotmail.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Sk Avijit Sarkar </td>
        <td>9830614790</td>
        <td>travelgalaxee@gmail.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Avanti Basu Chattoraj </td>
        <td>9831201225</td>
        <td>&#39;avanti.chattoraj@sabre.com&#39;</td>
    </tr>
    <tr>
        <td>Young Skal - Director</td>
        <td>Skl.Satyabrata Singh</td>
        <td>9903327666/9073300746</td>
        <td>Satty666@gmail.com</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Sk Jay Saraogi </td>
        <td>9903744323</td>
        <td>holidaytripster@gmail.com</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>TBA</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Auditor</td>
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
export default Kolkata;
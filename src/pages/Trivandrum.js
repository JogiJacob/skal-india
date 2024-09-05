import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Trivandrum = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Trivandrum"
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
                            <img className="w-100" src="./images/about/trivandrum.jpg" alt="mysuru" />
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
        <td>Skl. Sibi Joseph</td>
        <td>+91 9995802523</td>
        <td>joelsibi2004@gmail.com</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl. Sudhir Mehta</td>
        <td>+91 97456 09747</td>
        <td>sudhir_m1@yahoo.com</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Varghese Oommen </td>
        <td>+91 98461 96763</td>
        <td>oommen@gmail.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Syam Kurup</td>
        <td>+91 8129366699</td>
        <td>syam@grandideas.in</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Alex Jacob</td>
        <td>+91 99470 44400</td>
        <td> alex.jacob@travelshore.com</td>
    </tr>
    <tr>
        <td>Young Skal - Director</td>
        <td>TBA</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Skl. Anish PK</td>
        <td>+919447051702</td>
        <td>anish@ttpkerala.com</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>Skl. Janeesh Jalaluddin</td>
        <td>+91 9995037470</td>
        <td>janeesh.j@gmail.com</td>
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
export default Trivandrum;
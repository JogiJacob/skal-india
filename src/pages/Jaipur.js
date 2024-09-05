import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Jaipur = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Jaipur"
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
                            <img className="w-100" src="./images/about/jaipur.jpg" alt="coimbatore" />
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
        <td>Skl. Rina Chaturvedi </td>
        <td>+91 9730003064</td>
        <td>rina.chaturvedi@iihm.ac.in</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl. Rajiv Kapoor </td>
        <td>+91 8003999988</td>
        <td>Rajiv.Kapoor@Fairmont.com</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Rishi Miglani </td>
        <td>+91 9828288080</td>
        <td>rishbull@gmail.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Gunjan Singhal</td>
        <td>+91 9829754321</td>
        <td>md@team360degree.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Vikrant  Jain </td>
        <td>+91 9928022044</td>
        <td> vikrant3232@yahoo.co.in</td>
    </tr>
    <tr>
        <td>Director Membership Development</td>
        <td>Skl. Swaytank Maheshwari</td>
        <td>+91 9829053339</td>
        <td>swaytank.m@rainbowworldtours.com</td>
    </tr>
    <tr>
        <td>Director PR &amp; Communication </td>
        <td>Skl. Varun Behl </td>
        <td>+91 9166722227</td>
        <td>varunbehl165@gmail.com</td>
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
export default Jaipur;
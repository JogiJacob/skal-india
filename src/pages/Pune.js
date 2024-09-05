import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Pune = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Pune"
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
                            <img className="w-100" src="./images/about/pune.jpg" alt="pune" />
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
        <td>Skl. Shahabehram Rabbani</td>
        <td>+91 98230 15375</td>
        <td>goodwillttt@gmail.com</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl. Mehboob Shaikh</td>
        <td>+91 98500 80120</td>
        <td>mehboob@travelect.co.in</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Preetish Mutha</td>
        <td>+91 9021505152</td>
        <td>mpreetish@yahoo.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Amol Bhure</td>
        <td>+91 9822190057</td>
        <td>secretarypune@skalindia.org</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Sunil Londhe</td>
        <td>+91 8888640283</td>
        <td>sunillondhe@twltravel.com</td>
    </tr>
    <tr>
        <td>Young Skal - Director</td>
        <td>Skl. Sangeeta Bhattacharjee</td>
        <td>+91 8600995275</td>
        <td>sangeeta.bhattacharjee@iihm.ac.in</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Skl. Vishnu Bhagwan</td>
        <td>+91 9953545020</td>
        <td>vishnu.bhagwan@udchalo.com</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>Skl. Siddharth Jain</td>
        <td>+91 9811330099</td>
        <td>sj@chalodmc.com</td>
    </tr>
    <tr>
        <td>Auditor</td>
        <td>Skl. Prasad Shett</td>
        <td>+91 9763720450</td>
        <td>prasad@jigsawtravels.com</td>
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
export default Pune;
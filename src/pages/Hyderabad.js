import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Hyderabad = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Hyderabad"
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
        <td>President - Interim</td>
        <td>Skl. Sailesh Mathur </td>
        <td>+91 9848159885</td>
        <td>sailesh.mathur@gmail.com</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl. M V Ganesh</td>
        <td>+91 9840800685</td>
        <td>mvganesh68@gmail.com</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Mr Anil Kolla</td>
        <td>+91 9912311234</td>
        <td>info.aniltravels@gmail.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Mrs Avneet Sonthalia</td>
        <td>+91 9885668800</td>
        <td>theconciergeis@gmail.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Mr Ravi Agarwal</td>
        <td>+91 9398285349</td>
        <td>ravi@vackaso.in</td>
    </tr>
    <tr>
        <td>Young Skal - Director</td>
        <td>Skl. Mr A V Praveen</td>
        <td>+91 9848011170</td>
        <td>avpraveen@southerntravels.com</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Skl. Mr Earnest Immanuel</td>
        <td>+91 8587067406</td>
        <td>directorhyderabad@iihm.ac.in</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>Skl. Avnit Sonthalia</td>
        <td>+91 9885668800</td>
        <td>theconciergeis@gmail.com</td>
    </tr>
    <tr>
        <td>CSR &amp; FVF</td>
        <td>Skl. Valmiki Hari Kisan</td>
        <td>+91 86882 34560</td>
        <td>director@valmikitravels.com</td>
    </tr>
    <tr>
        <td>Auditor Sr</td>
        <td>Skl. Mohammad Yunus</td>
        <td>+91 8179571937</td>
        <td>visishtaholidays@gmail.com</td>
    </tr>
    <tr>
        <td>Auditor Jr</td>
        <td>Skl. Manish Dayya</td>
        <td>+91 9160624000</td>
        <td>manish.dayya@accor.com</td>
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
export default Hyderabad;
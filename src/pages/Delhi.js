import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Delhi = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Delhi"
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
                            <img className="w-100" src="./images/about/delhi.jpg" alt="coimbatore" />
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
                                <td>Skl. Ranjit Vig</td>
                                <td> +91 9910052315</td>
                                <td> ranjit@caairtravels.com/ ranjitvig@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 1</td>
                                <td>Skl. Ajay Bhatnagar</td>
                                <td>+91 9818911964</td>
                                <td>a57b64@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 2</td>
                                <td>Skl. Homa Mistry</td>
                                <td>+91 9810047328</td>
                                <td>hmistry@tbi.co.in</td>
                            </tr>
                            <tr>
                                <td>Secretary</td>
                                <td>Skl. Ankush Nijhawan</td>
                                <td> +91 9810089355</td>
                                <td> ankush@nijhawangroup.com </td>
                            </tr>
                            <tr>
                                <td>Treasurer</td>
                                <td>Skl. Tekla Maria</td>
                                <td>+91 9999613488</td>
                                <td> tekla.maira@accor.com</td>
                            </tr>
                            <tr>
                                <td>Young Skal - Director</td>
                                <td>TBA</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Com &amp; P.R - Director</td>
                                <td>TBA</td>
                                <td></td>
                                <td></td>
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
export default Delhi;
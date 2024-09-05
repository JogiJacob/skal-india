import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Bangalore = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Bangalore"
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
                            <img className="w-100" src="./images/about/banglore1.jpg" alt="About Images" />
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
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>President</td>
                                    <td>Skl. Ayappa Somaiah</td>
                                    <td>ayappa@tattvatrails.com</td>
                                    <td>+91 7022024353</td>
                                </tr>
                                <tr>
                                    <td>Vice President 1</td>
                                    <td>Skl. Mani Manimegalai</td>
                                    <td>manimegalai@globalaviationindia.com</td>
                                    <td>+91 8022249309</td>
                                </tr>
                                <tr>
                                    <td>Vice President 2</td>
                                    <td>Skl. Sudipta Deb</td>
                                    <td>sudipta@itravelplaces.com</td>
                                    <td>+91 9900250883</td>
                                </tr>
                                <tr>
                                    <td>Secretary</td>
                                    <td>Skl. Joseph Jose</td>
                                    <td>joseph.jose@gmail.com</td>
                                    <td>+91 97413 05750</td>
                                </tr>
                                <tr>
                                    <td>Treasurer</td>
                                    <td>Skl. Balan Nair</td>
                                    <td>vbnair@bangaloreaviationtraining.in</td>
                                    <td>+91 98440 02246</td>
                                </tr>
                                <tr>
                                    <td>Young Skal - Director</td>
                                    <td>Skl. Pawan Jain</td>
                                    <td>pavanjain@trippyescapes.com</td>
                                    <td>+91 9742454567</td>
                                </tr>
                                <tr>
                                    <td>Com & P.R - Director</td>
                                    <td>Skl.Thomas E Ramapuram </td>
                                    <td>thomas2.r@evolveback.com</td>
                                    <td>+91 9980137147</td>
                                </tr>
                                <tr>
                                    <td>Membership Development Officer</td>
                                    <td>Skl. Darby Raju </td>
                                    <td>darbyraju@gmail.com</td>
                                    <td>+91 9845428071</td>
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
export default Bangalore;
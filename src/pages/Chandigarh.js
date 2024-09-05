import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Chandigarh = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Chandigarh"
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
                            <img className="w-100" src="./images/about/chandigarh.jpg" alt="About Images" />
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
                                    <td>Skl.Rishi Kapoor</td>
                                    <td>9888999429</td>
                                    <td>rk@mytravelbox.in</td>
                                </tr>
                                <tr>
                                    <td>Vice President 1</td>
                                    <td>Skl.Vinod Sharma</td>
                                    <td>9855055562</td>
                                    <td>venusholidaymart@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Vice President 2</td>
                                    <td>Skl. Karan Anand</td>
                                    <td>9888450885</td>
                                    <td>journeywhizz@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Secretary</td>
                                    <td>Skl.Piyush Kohli</td>
                                    <td>9988688626</td>
                                    <td>brforex@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>Treasurer</td>
                                    <td>Skl.Sumeet Gandhi</td>
                                    <td>8620000012</td>
                                    <td>gandhitravel@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Com &amp; P.R - Director</td>
                                    <td>Skl.Kanav Aggarwal</td>
                                    <td>9876030001</td>
                                    <td>kanav.aggarwalholidays@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Young Skal - Director</td>
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
export default Chandigarh;
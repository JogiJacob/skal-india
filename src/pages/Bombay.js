import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Bombay = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Bombay"
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
                            <img className="w-100" src="./images/about/bombay.jpg" alt="About Images" />
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
                                <td>Skl. Burjis Mehta</td>
                                <td>9833414036</td>
                                <td>burjismehta@skyworldair.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 1 </td>
                                <td>Skl. Irshad Patel </td>
                                <td>9820680203</td>
                                <td>irshadpatel9@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 2</td>
                                <td>Skl. Vishal Bhatia</td>
                                <td>9820815941</td>
                                <td>Vishal.Bhatia@visitbritain.org</td>
                            </tr>
                            <tr>
                                <td>Secretary</td>
                                <td>Skl. SatyaPrakash Gupta </td>
                                <td>9820165612</td>
                                <td>vistatravel.satya@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Treasurer</td>
                                <td>Skl. Dr Nishant S Mehta </td>
                                <td>9821470299</td>
                                <td>Nishant1211@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Young Skal - Director</td>
                                <td>Skl. Hema Manghnani</td>
                                <td>9643127176</td>
                                <td>Connect@hmtravelsworld.com</td>
                            </tr>
                            <tr>
                                <td>Com &amp; P.R - Director</td>
                                <td>Skl. Sashidhar Nagsri</td>
                                <td>9820137703</td>
                                <td>nagsri1@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Membership Development Officer</td>
                                <td>Skl.Ayyappan Syamkumar </td>
                                <td>9995917777</td>
                                <td>Ayyappan.pillai@omanair.com</td>
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
export default Bombay;
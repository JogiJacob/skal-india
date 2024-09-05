import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Coimbatore = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Coimbatore"
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
                            <img className="w-100" src="./images/about/coimbatore.jpg" alt="coimbatore" />
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
                                <td>Skl. Arun Kumar</td>
                                <td>99449 88161</td>
                                <td>arunkumar@zonebythepark.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 1</td>
                                <td>Skl. Ramesh Chandrakumar</td>
                                <td>97906 86828</td>
                                <td>ramesh.chandrakumar@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 2</td>
                                <td>Skl. Gugan Ilango</td>
                                <td>+91 4224983303</td>
                                <td>gugan@gowtham.net</td>
                            </tr>
                            <tr>
                                <td>Secretary</td>
                                <td>Skl. Premkanna </td>
                                <td>+91 4224519193</td>
                                <td>premkannap@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Treasurer</td>
                                <td>Skl. Ganesh Palanisamy</td>
                                <td>+91 4224529193</td>
                                <td>marketing.expressholidays@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Young Skal - Director</td>
                                <td>Skl. Dr.Bindu.V.T.Nair</td>
                                <td>+91 9677389492</td>
                                <td>vtbindhu19@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Com &amp; P.R - Director</td>
                                <td>Skl.Arun Radhakrishnan</td>
                                <td>+91 8220766155</td>
                                <td>arunprasadh@delightzinn.com</td>
                            </tr>
                            <tr>
                                <td>Membership Development Officer</td>
                                <td>Skl.Parameshwaran</td>
                                <td>+91 9047599905</td>
                                <td>info@newwelcometravels.in</td>
                            </tr>
                            <tr>
                                <td>CSR -Director</td>
                                <td>Skl. Varadaraj Prabhu Mohan</td>
                                <td>+91 9843149606</td>
                                <td>info@sreemvholidays.com</td>
                            </tr>
                            <tr>
                                <td>Events - Director</td>
                                <td>Skl. C K Gopinaathan </td>
                                <td>+91 8526655566</td>
                                <td>gopi@tarmac.co.in </td>
                            </tr>
                            <tr>
                                <td>IPP</td>
                                <td>Skl. Charles Fabian</td>
                                <td>+91 9840973741</td>
                                <td>charlesfabian@theresidency.com</td>
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
export default Coimbatore;
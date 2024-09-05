import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Bhubaneswar = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Bhubaneswar"
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
                            <img className="w-100" src="./images/about/bubaneswar.jpg" alt="About Images" />
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
                                <td>Skl. Jitendra Kumar Mohanty</td>
                                <td>9338102221</td>
                                <td>cmd@swostigroup.com</td>
                                </tr>
                                <tr>
                                <td>Vice President 1</td>
                                <td>Skl.Debasish Patnaik</td>
                                <td>9337555551</td>
                                <td>deboopatnaik@thecrown.in</td>
                                </tr>
                                <tr>
                                    <td>Vice President 2</td>
                                    <td>Skl. Rak Kishore Patra</td>
                                    <td></td>
                                    <td>rajpuri08@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Secretary</td>
                                    <td>Skl.Debasish Mahapatra</td>
                                    <td>9337123999</td>
                                    <td>k7holidays@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>Treasurer</td>
                                    <td>Skl.Sourav Dash</td>
                                    <td>9124777703</td>
                                    <td>saurav@tripprocess.com </td>
                                </tr>
                                <tr>
                                    <td>Com & P.R - Director</td>
                                    <td>Skl.Subrat Dash</td>
                                    <td>7008134870</td>
                                    <td>ceo@pipulhotelsandresorts.com </td>
                                </tr>
                                <tr>
                                    <td>CSR</td>
                                    <td>Skl.Debabrat Dash</td>
                                    <td>9338757598</td>
                                    <td>debabrata@omleisure.org</td>
                                </tr>
                                <tr>
                                    <td>Membership Development Officer</td>
                                    <td>Skl.Amar Kumar Sahoo</td>
                                    <td>9861257600</td>
                                    <td>amar@vwvtourism.com </td>
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
export default Bhubaneswar;
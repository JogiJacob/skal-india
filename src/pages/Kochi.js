import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Kochi = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Kochi"
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
                            <img className="w-100" src="./images/about/kochi.jpg" alt="coimbatore" />
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
        <td>Skl. Nirmala Lily</td>
        <td>+91 9947561264</td>
        <td>lilly.nirmala@gmail.com</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl.Dinesh Rai</td>
        <td>+91 92468 00245</td>
        <td>dinesh.rai@ihg.com</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Riyaz UC</td>
        <td>+91 9995518181</td>
        <td>riyaz@spicelandholidays.com</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Girish G Nair</td>
        <td>+91 9495838775</td>
        <td>girishcok@gmail.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl.  George Peter Ponvely </td>
        <td>+91 9847045100</td>
        <td>gp@ghl.co.in</td>
    </tr>
    <tr>
        <td>Young Skal - Director</td>
        <td>Skl. Sheri Kurian</td>
        <td>+91 9980222744</td>
        <td>mskurian2001@gmail.com</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td>Skl. Girish Prabhu</td>
        <td>+91 95620 01115</td>
        <td>girish.s.prabhu@gmail.com</td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>Skl. Santosh V Ramakrishnan</td>
        <td>+91  98470 52523</td>
        <td>santoshv6@gmail.com</td>
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
export default Kochi;
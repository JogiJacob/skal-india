import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const MumbaiSouth = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Mumbai South"
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
                            <img className="w-100" src="./images/about/mumso.jpg" alt="coimbatore" />
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
        <td>Skl. Dr Mukesh Batra</td>
        <td>9022929018</td>
        <td>chairmansoffice@drbatras.com</td>
    </tr>
    <tr>
        <td>Vice President 1</td>
        <td>Skl. Jason O Connor</td>
        <td> 9820006521</td>
        <td>jason@oconnornassociates.com</td>
    </tr>
    <tr>
        <td>Vice President 2</td>
        <td>Skl. Suresh Gulrajani</td>
        <td>+91 9920025886</td>
        <td>mail@enjoytravels.co.in</td>
    </tr>
    <tr>
        <td>Secretary</td>
        <td>Skl. Kuncheria Thomas</td>
        <td>+91 9867569764</td>
        <td>abivin1@gmail.com</td>
    </tr>
    <tr>
        <td>Treasurer</td>
        <td>Skl. Maneka Mulchandani</td>
        <td>+91 98200 77107</td>
        <td>maneka@autoriders.in</td>
    </tr>
    <tr>
        <td>Young Skal - Director</td>
        <td>Skl. Bhagwan Balani</td>
        <td>+91 2267045001</td>
        <td>bhagwan.balani@itchotels.in</td>
    </tr>
    <tr>
        <td>Com &amp; P.R - Director</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Membership Development Officer</td>
        <td>Skl. Maria Samuel</td>
        <td> 9820608130</td>
        <td>maria.samuel@gulmargskiacademy.com</td>
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
export default MumbaiSouth;
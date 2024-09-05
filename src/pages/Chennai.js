import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Chennai = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Chennai"
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
                            <img className="w-100" src="./images/about/chennai.jpg" alt="About Images" />
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
                                <td>Skl. Shabin Sarvotham</td>
                                <td>+91 9940166073</td>
                                <td>shabin4123@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 1</td>
                                <td>Skl. Kamleshwaran P S</td>
                                <td>+91 9444030937</td>
                                <td>kamlesh@southernskies.in</td>
                            </tr>
                            <tr>
                                <td>Vice President 2</td>
                                <td>Skl. Rajesh Radhakrishnan</td>
                                <td>+91 98842 10561</td>
                                <td>rrajesh@theparkhotels.com</td>
                            </tr>
                            <tr>
                                <td>Secretary</td>
                                <td>Skl. Suseendran Parameswaran</td>
                                <td>+91 98400 29446</td>
                                <td>skaltreash@gmail.com </td>
                            </tr>
                            <tr>
                                <td>Treasurer</td>
                                <td>Skl. P. Lakshmanan</td>
                                <td>+91 95000 84849</td>
                                <td>skaltreash@gmail.com/laxman@slicerooms.com</td>
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
                                <td>Skl. Venkatesh Rao </td>
                                <td>+91 78258 47444</td>
                                <td>venkatesh@theresidency.com</td>
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
export default Chennai;
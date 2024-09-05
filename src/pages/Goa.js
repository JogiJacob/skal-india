import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Goa = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Goa"
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
                            <img className="w-100" src="./images/about/goa.jpg" alt="coimbatore" />
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
                                <td>Skl. Vivek Kerkar</td>
                                <td>+91 8322279036</td>
                                <td>vivekk_goa@rediffmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 1</td>
                                <td>Skl. Vivek Kerkar</td>
                                <td>+91 8322279036</td>
                                <td>vivekk_goa@rediffmail.com</td>
                            </tr>
                            <tr>
                                <td>Vice President 2</td>
                                <td>Skl. Guitry Velho</td>
                                <td>+91 8326694444</td>
                                <td>guitry@selecthotels.in</td>
                            </tr>
                            <tr>
                                <td>Secretary</td>
                                <td>Skl. Reshma Alves</td>
                                <td>+91 9158151100</td>
                                <td>reshmaalves@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Treasurer</td>
                                <td>Skl. Jack Sukhija</td>
                                <td>+91 8322226523</td>
                                <td>panjiminn@vsnl.in</td>
                            </tr>
                            <tr>
                                <td>Young Skal - Director</td>
                                <td>Skl. Carl Costa</td>
                                <td>+91 9922953944</td>
                                <td>carl@cosmecosta.in</td>
                            </tr>
                            <tr>
                                <td>Com &amp; P.R - Director</td>
                                <td>Skl. Mark Mendes</td>
                                <td>+91 8322957475</td>
                                <td>markmendes@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Membership Development Officer</td>
                                <td>Skl. Ernest Dias</td>
                                <td>+91 9822102298</td>
                                <td>ernest.dias@sita.in</td>
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
export default Goa;
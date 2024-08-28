import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const YoungSkal = () => {
    return (
        <>
            <SEO title="NationaL Board" />
            <Layout>
                <BreadcrumbOne 
                    title="Young Skal"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Young Skal"
                />
            <div className="main-content">
            <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title"><strong>Young Skal</strong> is a category of Skal international organization, focussed on worldwide 
                                young professionals and students in tourism industry</h3>

                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Young Skål Student is a student at an authorized tourism educational establishment, which grants a degree or recognized diploma upon completion of studies.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">They must be a minimum of 18 and a maximum of 27 years of age</h4>
                                        </div>
                                     </li>
                                     <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Students who transition from school into a supervisory or junior management position, may remain in this Young Skål Student subcategory for a maximum of two years
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
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
export default YoungSkal;
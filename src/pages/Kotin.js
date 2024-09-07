import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";


const Kotin = () => {
    return (
        <>
            <SEO title="Kotin" />
            <Layout>
                <BreadcrumbOne 
                    title="Kotin"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Kotin"
                />
            <div className="main-content">
            <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        <div className="content">
                        {/* <embed src="./images/kotin/KOTIN-1.pdf" type="application/pdf"   height="700px" width="500">
                        </embed> */}
                        <div className="col-lg-2 mt_md--40 mt_sm--40">
                       
                        <SectionTitle
                            textAlign = "text-center"
                            radiusRounded = ""
                            subtitle = "Volume 5, Issue 10 July - September 2024"
                        />
                        <div className="thumbnail">
                            <img className="w-100" src="/images/kotin/KOTIN-july-sept.jpg" alt="Kotin July-Sept2024" />
                        </div>
                        <div>
                        <div className="download-button mt--20">
                            <a className="btn-read-more" href="/images/kotin/KOTIN-july-september.pdf" download><span>Download</span></a>
                            <a className="btn-read-more ml--20" href="/images/kotin/KOTIN-july-september.pdf" target="_blank"><span>Read</span></a>
                        </div>
                        </div>  
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
export default Kotin;
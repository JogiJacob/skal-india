import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ContactOne from "../elements/contact/ContactOne";
import ScrollAnimation from "react-animate-on-scroll";

const KotinList = [
    {
        subt: "Volume 5, Issue 10, July - September 2024",
        imagev : "/images/kotin/KOTIN-july-sept.png",
        alt: "Kotin July-Sept 2024",
        downpdf: "/images/kotin/KOTIN-july-september.pdf"

    },
    {
        subt: "Volume 2, Issue 4, September-2021",
        imagev : "/images/kotin/KOTIN-September-2021.png",
        alt: "KOTIN September-2021",
        downpdf: "/images/kotin/KOTIN-September-2021.pdf"

    },

    {
        subt: "Volume 2, Issue 3, KOTIN March 2021",
        imagev : "/images/kotin/KOTIN-03-March-2021.png",
        alt: "KOTIN March 2021",
        downpdf: "/images/kotin/KOTIN-03-March-2021.pdf"

    },

    {
        subt: "Volume 2, Issue 2, KOTIN February 2021",
        imagev : "/images/kotin/KOTIN-02-February-2021.png",
        alt: "KOTIN February 2021",
        downpdf: "/images/kotin/KOTIN-02-February-2021.pdf"

    },

    {
        subt: "Volume 2, Issue 1, KOTIN January 2021",
        imagev : "/images/kotin/KOTIN-01-January-2021.png",
        alt: "KOTIN January 2021",
        downpdf: "/images/kotin/KOTIN-01-January-2021.pdf"

    },

    {
        subt: "KOTIN 12 December 2020",
        imagev : "/images/kotin/KOTIN-12-December-2020.png",
        alt: "KOTIN December 2020",
        downpdf: "/images/kotin/KOTIN-12-December-2020.pdf"

    },
]
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
                        <div className="content" style={{display:"flex"}}>
                        {/* <embed src="./images/kotin/KOTIN-1.pdf" type="application/pdf"   height="700px" width="500">
                        </embed> */}
                        {/* <div className="col-lg-2 mt_md--40 mt_sm--40"> */}
                        <div class="row">
                        {KotinList && KotinList.map((item, index) => (   
                        <div className="col-lg-2 mt_md--40 mt_sm--40 mr--40 mt--20" key={index}>             
                        <SectionTitle
                            textAlign = "text-center"
                            radiusRounded = ""
                            subtitle = {item.subt}
                        />
                        <div className="thumbnail">
                            <img className="w-100" src={item.imagev} alt={item.alt} />
                        </div>
                        <div>
                        <div className="download-button mt--20">
                            <a className="btn-read-more" href={item.downpdf} download><span>Download</span></a>
                            <a className="btn-read-more ml--20" href={item.downpdf} target="_blank"><span>Read</span></a>
                        </div>
                        </div>  
                        </div>   
                        ))}   
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
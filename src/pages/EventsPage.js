import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";

const EventsPage = () => {
    return (
        <>
            <SEO title="Events" />
            <Layout>
                <BreadcrumbOne 
                    title="Events"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Events"
                />
             <div className="main-content">
            <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        <div className="content">
                            
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
export default EventsPage;
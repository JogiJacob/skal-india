
import React from 'react';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";

const JulyBlog = [
    {
     link: "https://www.afaqs.com/people-spotting/skal-international-announces-new-board-members-for-india"
    },
    {
        link: "https://indiaoutbound.info/trade-news/skal-international-names-new-board-members-for-india/"
    },
    {
        link: "https://search.app/3xbndiCnsSdHJUqp7"
    },
    {
        link: "https://traveltradejournal.com/skal-international-announces-new-board-members-for-india-sanjeev-mehra-to-serve-as-president/"
    },
    {
        link: "https://travel.economictimes.indiatimes.com/news/associations/skal-international-announces-new-board-members-for-india/111592663"
    },
    {
        link: "https://www.traveldailynews.asia/new-appointments/skal-international-india-elects-new-board-members-for-2024-2026/"
    },
    {
        link: "https://eturbonews.com/new-skal-international-board-members-for-india-named/"
    },
    {
        link: "https://hospitality.economictimes.indiatimes.com/news/travel/skal-international-elects-new-board-members-for-india/111594489"
    },
    {
        link: "https://voyagersworld.in/skal-international-announces-new-board-members-for-india/"
    },
    {
        link: "https://safariplus.co.in/skal-international-announces-new-board-members-for-india"
    },
    {
        link: "https://www.miceshowcase.com/skal-international-announces-new-board-members-for-india/"
    },
    {
        link: "https://travelworldonline.in/video-news/skal-international-indigo-stotrak-hotels-taai-agodas-pool/"
    },
    {
        link: "http://www.traveltrendstoday.in/skal-international-announces-new-board-members-for-india/"
    },
    {
        link: "https://www.hospemag.me/cms/skal-international-announces-new-board-members-for-indianbsp"
    },
    {
        link: "https://tourismquest.com/2024/07/08/skal-international-announces-new-board-members-for-india/"
    },
    {
        link: "https://travel.economictimes.indiatimes.com/news/associations/skal-international-announces-new-board-members-for-india/111592663"
    },
    {
        link: "https://hospitalitylexis.media/skal-international-announces-new-board-members-for-india/"
    },
    {
        link: "http://www.hospemag.me/cms/skal-international-announces-new-board-members-for-indianbsp"
    },
    {
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7099699092137607168"
    },
    {
        link: "SKAL International Announces New Board Members for India | Travel Mail | India&#39;sLeading Travel and Tourism Magazine"
    }
]
const NewsMedia = () => {
    return (
        <>
            <SEO title="News and Media" />
            <Layout>
                <BreadcrumbOne 
                    title="News and Media"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="News and Media"
                />
            <div className="main-content">
            <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-12 mt_md--40 mt_sm--40">
                        <div className="rn-blog-area rn-section-gap">
                        <div className="newsLink">
                            <h2>July</h2>
                            <div className="col-lg-12 mt_md--40 mt_sm--40">
                            <div>
                             {JulyBlog && JulyBlog.map((item, index) => ( 
                                <div key={index} className="col-lg-12 col-md-6 col-12 mt--30">
                                     <div className={`rn-card box-card-style-default card-list-view`} style={{padding:"15px", background:"#769cd1"}}>
                                        <a className="newsLinkone" href={item.link} target="_blank">{item.link}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                        </div>
                        <div>
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
export default NewsMedia;
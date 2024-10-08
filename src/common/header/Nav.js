import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">

            <li className="has-droupdown"><Link to="#">SKÅL India</Link>
                <ul className="submenu">
                    {/* <li><Link to="/business-consulting">Overview</Link></li> */}
                    <li><Link to="/national-board">National Board</Link></li>
                    {/* <li><Link to="/corporate">Committee Heads</Link></li> */}
                    <li><Link to="/past-presidents">Past Presidents</Link></li>
                    {/* <li><Link to="/business">Affiliations</Link></li> */}
                    {/* <li><Link to="/digital-agency">Memberships</Link></li> */}
                    {/* <li><Link to="/finance">Young SKÅL</Link></li> */}
                </ul>
            </li>

            <li className="has-droupdown"><Link to="#">Join SKAL</Link>
                <ul className="submenu">
                    {/* <li><Link to="/business-consulting">Active skal</Link></li> */}
                    <li><Link to="/skalmembership">SKAL Membership</Link></li>
                    <li><Link to="/young-skal">Young SKÅL</Link></li>
                    <li><a href="https://skal.org/MembershipForm" target="_blank">Membership Application</a></li>
                </ul>
            </li>

            <li><Link to="/events">Events</Link></li>
            <li><Link to="/news-media">News & Media</Link></li>

            <li className="has-droupdown"><Link to="#">Clubs</Link>
                <ul className="submenu">
                    <li><Link to="/bangalore">Bangalore</Link></li>
                    <li><Link to="/bhubaneswar">Bhubaneswar</Link></li>
                    <li><Link to="/bombay">Bombay</Link></li>
                    <li><Link to="/chandigarh">Chandigarh</Link></li>
                    <li><Link to="/chennai">Chennai</Link></li>
                    <li><Link to="/coimbatore">Coimbatore</Link></li>
                    <li><Link to="/delhi">Delhi</Link></li>
                    <li><Link to="/goa">Goa</Link></li>
                    <li><Link to="/jaipur">Jaipur</Link></li>
                    <li><Link to="/hyderabad">Hyderabad</Link></li>
                    <li><Link to="/kochi">Kochi</Link></li>
                    <li><Link to="/kolkata">Kolkata</Link></li>
                    <li><Link to="/lucknow">Lucknow</Link></li>
                    <li><Link to="/mumbai-south">Mumbai South</Link></li>
                    <li><Link to="/mysuru">Mysuru</Link></li>
                    <li><Link to="/pune">Pune</Link></li>
                    <li><Link to="/trivandrum">Trivandrum</Link></li>
                </ul>
            </li>

            <li><Link to="/kotin">Kotin</Link></li>

            {/* <li className="has-droupdown"><Link to="#">Sponsors</Link>
                <ul className="submenu">
                    <li><Link to="/business-consulting">Overview</Link></li>
                    <li><Link to="/business-consulting-2">National Board</Link></li>
                    <li><Link to="/corporate">Committee Heads</Link></li>
                    <li><Link to="/business">Affiliations</Link></li>
                    <li><Link to="/digital-agency">Memberships</Link></li>
                    <li><Link to="/finance">Young SKÅL</Link></li>
                </ul>
            </li> */}

            {/* <li className="has-droupdown"><Link to="#">News & Media</Link>
                <ul className="submenu">
                    <li><Link to="/business-consulting">Overview</Link></li>
                    <li><Link to="/business-consulting-2">National Board</Link></li>
                    <li><Link to="/corporate">Committee Heads</Link></li>
                    <li><Link to="/business">Affiliations</Link></li>
                    <li><Link to="/digital-agency">Memberships</Link></li>
                    <li><Link to="/finance">Young SKÅL</Link></li>
                </ul>
            </li> */}

            {/* <li><Link to="/about-us">Kotin</Link></li> */}

            {/* <li className="has-droupdown"><Link to="#">Home</Link>
                <ul className="submenu">
                    <li><Link to="/business-consulting">Business Consulting</Link></li>
                    <li><Link to="/business-consulting-2">Business Consulting 02</Link></li>
                    <li><Link to="/corporate">Corporate</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/digital-agency">Digital Agency</Link></li>
                    <li><Link to="/finance">Finance</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/marketing">Marketing Agency</Link></li>
                    <li><Link to="/travel-agency">Travel Agency</Link></li>
                    <li><Link to="/consulting">Consulting</Link></li>
                    <li><Link to="/seo-agency">SEO Agency</Link></li>
                    <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                    <li><Link to="/event-conference">Event Conference</Link></li>
                    <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                    <li><Link to="/freelancer">Freelancer</Link></li>
                    <li><Link to="/international-consulting">International Consulting</Link></li>
                    <li><Link to="/startup">Startup</Link></li>
                    <li><Link to="/web-agency">Web Agency</Link></li>
                </ul>
            </li> */}
            
            {/* <li><Link to="/about-us">About</Link></li> */}

            {/* <li className="with-megamenu"><Link to="#">Elements</Link>
                <div className="rn-megamenu">
                    <div className="wrapper">
                        <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/button">Button</Link></li>
                                    <li><Link to="/service">Service</Link></li>
                                    <li><Link to="/counter">Counter</Link></li>
                                    <li><Link to="/progressbar">Progressbar</Link></li>
                                    <li><Link to="/accordion">Accordion</Link></li>
                                    <li><Link to="/social-share">Social Share</Link></li>
                                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/testimonial">Testimonial</Link></li>
                                    <li><Link to="/timeline">Timeline</Link></li>
                                    <li><Link to="/tab">Tab</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/split">Split Section</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/call-to-action">Call To Action</Link></li>
                                    <li><Link to="/video-popup">Video</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/brand">Brand</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/error">404</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/advance-tab">Advance Tab <span className="rn-badge-card">Hot</span></Link></li>
                                    <li><Link to="#">Brand Carousel <span className="rn-badge-card">Comming</span></Link></li>
                                    <li><Link to="advance-pricing">Advance Pricing <span className="rn-badge-card">Hot</span></Link></li>
                                    <li><Link to="/portfolio-details/1">Portfolio Details</Link></li>
                                    <li><Link to="/blog-details/1">Blog Details</Link></li>
                                    <li><Link to="/error">404 Page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li> */}

            {/* <li className="has-droupdown"><Link to="#">Blog</Link>
                <ul className="submenu">
                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                    <li><Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                    <li><Link to="/blog-list-view">Blog List View</Link></li>
                    <li><Link to="/blog-list-sidebar">Blog List View Sidebar</Link></li>
                </ul>
            </li> */}

            {/* <li className="has-droupdown"><Link to="#">Portfolio</Link>
                <ul className="submenu">
                    <li><Link to="/portfolio">Portfolio Default</Link></li>
                    <li><Link to="/portfolio-three-column">Portfolio Three Column</Link></li>
                    <li><Link to="/portfolio-full-width">Portfolio Full Width</Link></li>
                    <li><Link to="/portfolio-grid-layout">Portfolio Grid Layout</Link></li>
                    <li><Link to="/portfolio-box-layout">Portfolio Box Layout</Link></li>
                </ul>
            </li> */}

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;

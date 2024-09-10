import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        // image: '/images/service/galery-image-01.png',
        title: 'What is Skål International',
        description: 'Skål International is an Association of Travel and Tourism Professionals that encourages and creates a network of contacts around the world. It is the only international body uniting all branches of the travel and tourism industry'
    },
    {
        // image: '/images/service/galery-image-02.png',
        title: 'Membership',
        description: 'Obtain great benefits belonging to the largest professional network in the sector.Business Development Travel Expertise Social Network Professionals Database'
    },
    {
        // image: '/images/service/galery-image-03.png',
        title: 'Meetings & Events',
        description: 'Local, National and International meetings and conferences to expand your network, business exchange opportunities, and exceptional social experiences.'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                {/* <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div> */}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;
import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms And Condition</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-lg-12 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text" style={{color:"white"}}>© Developed by <a href="http://travelshore.com/" target="_blank">Travelshore Technologies </a>{new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;
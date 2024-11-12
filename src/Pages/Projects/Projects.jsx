import React from 'react'
import caseThumb from '../../assets/Projects/case-thumb.png'
// import caseThumb1 from '../../assets/Projects/case-thumb1.png'
import caseThumb2 from '../../assets/Projects/case-thumb2.png'
import caseThumb3 from '../../assets/Projects/case-thumb3.png'
import caseThumb4 from '../../assets/Projects/case-thumb3.png'
import caseThumb5 from '../../assets/Projects/case-thumb3.png'
import Layout from '../../Layout/Layout'

const Projects = () => {
    return (
        <Layout>
            <div className="case-study-area">
                <div className="container">
                    <div className="row case-study-bg">
                        <div className="col-lg-12 col-sm-12">
                            <div className="case_study_nav">
                                <div className="case_study_menu">
                                    <ul className="menu-filtering">
                                        <li data-filter="*" className="current_menu_item">SEE ALL</li>
                                        <li data-filter=".technology">TECHNOLOGY</li>
                                        <li data-filter=".helpdesk">HELPDESK</li>
                                        <li data-filter=".analysis">ANALYSIS</li>
                                        <li data-filter=".marketing">MARKETING</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row image_load">
                        <div className="col-lg-6 col-sm-6 grid-item technology">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb">
                                    <img src={caseThumb} alt="thumb" />
                                </div>
                                <div className="case-study-content">
                                    <div className="case-study-title">
                                        <h5>Marketing , Software</h5>
                                        <h3><a href="project-details.html">Software Management</a></h3>
                                    </div>
                                    <div className="case-study-icon">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 grid-item helpdesk">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb"><img src={caseThumb2} alt="thumb" /></div>
                                <div className="case-study-content">
                                    <div className="case-study-title">
                                        <h5>Marketing , Software</h5>
                                        <h3><a href="project-details.html">Web Development</a></h3>
                                    </div>
                                    <div className="case-study-icon">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 grid-item analysis helpdesk">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb"><img src={caseThumb3} alt="thumb" /></div>
                                <div className="case-study-content">
                                    <div className="case-study-title">
                                        <h5>Marketing , Software</h5>
                                        <h3><a href="project-details.html">Platform Integration</a></h3>
                                    </div>
                                    <div className="case-study-icon">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 grid-item technology analysis">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb"><img src={caseThumb4} alt="thumb" /></div>
                                <div className="case-study-content">
                                    <div className="case-study-title">
                                        <h5>Marketing , Software</h5>
                                        <h3><a href="project-details.html">Network Security</a></h3>
                                    </div>
                                    <div className="case-study-icon">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 grid-item marketing technology">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb"><img src={caseThumb5} alt="thumb" /></div>
                                <div className="case-study-content">
                                    <div className="case-study-title">
                                        <h5>Marketing , Software</h5>
                                        <h3><a href="project-details.html">digital marketing</a></h3>
                                    </div>
                                    <div className="case-study-icon">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 grid-item technology marketing">
                            <div className="case-study-single-box">
                                <div className="case-study-thumb"><img src={caseThumb2} alt="thumb" /></div>
                                <div className="case-study-content">
                                    <div className="case-study-title">
                                        <h5>Marketing , Software</h5>
                                        <h3><a href="project-details.html">product &amp; design</a></h3>
                                    </div>
                                    <div className="case-study-icon">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Projects

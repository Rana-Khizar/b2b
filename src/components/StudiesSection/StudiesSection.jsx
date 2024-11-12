import React from 'react'
import caseStudy2 from '../../assets/ser-thumb2.png'
import caseStudy1 from '../../assets/case-studies.png'
import caseStudy3 from '../../assets/case-studies3.png'
import video1 from '../../assets/leadership-section.mp4'
import video2 from '../../assets/omni.mp4'
import video3 from '../../assets/vid1.mp4'
import WhoAreYou from '../../assets/who-r-u.png'

const StudiesSection = () => {
  return (
    <>
      <div className="case-studies-area ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="section-sub-title">case studies</h6>
                <h1 className="section-main-title2">Our latest Case Studies</h1>
              </div>
            </div>
          </div>
          <div className="row rounded   ">
            <div className="case-studies-box ps-4 gap-3 ">
              <div className="row">
                <div className="col-lg-6 col-md-6  " >
                  <div className='bg-orange rounded-5 p-1'>
                    <div className="single-case-studies-box">
                      <div className="case-studies-content">
                        {/* <h1 className='section-sub-title text-white pt-4'>Who Are We ?</h1> */}
                        <div className='d-flex' >
                          <img src={WhoAreYou} width={180} alt="who are we" />
                          <ul>
                            <li className='text-white text-2xl font-famil '>Leading Kashmir handicrafts with partnerships, advocacy.</li>
                            <li className='text-white text-2xl font-famil'>Integrating heritage with North American standards.</li>
                          </ul>
                        </div>
                        <ul className='lh-lg'>
                          {/* <li className='text-white text-2xl font-famil '>Leading Kashmir handicrafts with partnerships, advocacy.</li> */}
                          {/* <li className='text-white text-2xl font-famil'>Integrating heritage with North American standards.</li> */}
                          <li className='text-white text-2xl font-famil'>Omnichannel support: e-commerce, import-export, franchises.                          </li>
                          <li className='text-white text-2xl font-famil'>Aligning craftsmanship to North American trust.</li>
                          <li className='text-white text-2xl font-famil'>Veteran, women, minority-owned; diversity-focused values.</li>
                          <li className='text-white text-2xl font-famil'>DEIB-certified; equity, belonging, innovation driven.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="case-studies-thumb">
                    <video src={video1} controls ></video>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="case-studies-single-box">
                <div className="case-studies-thumb">
                  {/* <img  src={caseStudy2} alt="thumb" /> */}
                  <video src={video2} controls></video>
                  <div className="case-studie-content">
                    {/* <h3><a href="project-details.html">Professional Website Design</a></h3>
              <h6>Mobile App Design</h6> */}
                  </div>
                  {/* <div className="case-studies-icon">
              <i className="bi bi-arrow-right" />
            </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="case-studies-single-box">
                <div className="case-studies-thumb">
                  {/* <img  src={caseStudy3} alt="thumb" /> */}
                  <video src={video3} controls></video>
                  <div className="case-studie-content">
                    {/* <h3><a href="project-details.html">Professional Website Design</a></h3>
              <h6>Mobile App Design</h6> */}
                  </div>
                  {/* <div className="case-studies-icon">
              <i className="bi bi-arrow-right" />
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default StudiesSection

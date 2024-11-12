import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutArea.css';
import AboutThumb from "../../assets/solutek-imagess/about-thumb.png"
import About1 from "../../assets/solutek-imagess/about1.png"
import About4 from "../../assets/solutek-imagess/about4.png"
import faq1 from '../../assets/faq1.png'
function AboutArea() {
  return (
    <>
      <div className="faq-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title text-left">
                <h5 className="section-sub-title">SOLUTEK COMPANY</h5>
                <h1 className="section-main-title">Keeping Your Business</h1>
                <h1 className="section-main-title">Safe and <span>Available.</span></h1>
              </div>
              <div className="faq-thumb">
                <img src={faq1} alt="faq1" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="tab_container">
                <div className="feq-content">
                  <h3 className="faq-title">A Comprehensive <span>Guide.</span></h3>
                  <p className="faq-description">Alternative innovation network environmental whiteboard pursue  for premier
                    methods empowerment  go forward opportunities</p>
                </div>
                <div id="tab1" className="tab_content">
                  <ul className="accordion">
                    <li>
                      <a className><span>What Medical Services Do You Provide?</span></a>
                      <p style={{ display: 'none' }}>Appropriately promote enterprise-wide vortals throuh innovative information
                        evolve go forward markets whereas synergistic applications power full
                        sound quality vectors without equity invested best practices revolutionize
                        enterprise-wide vortals through innovative.</p>
                    </li>
                    <li>
                      <a><span>What is your customer geography?</span></a>
                      <p>Appropriately promote enterprise-wide vortals throuh innovative information
                        evolve go forward markets whereas synergistic applications power full
                        sound quality vectors without equity invested best practices revolutionize
                        enterprise-wide vortals through innovative.</p>
                    </li>
                    <li>
                      <a><span>What are the main industries we serve?</span></a>
                      <p> Appropriately promote enterprise-wide vortals throuh innovative information
                        evolve go forward markets whereas synergistic applications power full
                        sound quality vectors without equity invested best practices revolutionize
                        enterprise-wide vortals through innovative.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-shape">
            <img src="assets/images/faq2.png" alt="faq2" />
          </div>
          <div className="faq-shape2">
            <img src="assets/images/faq3.png" alt="faq2" />
          </div>
        </div>
      </div>

    </>
  );
}

export default AboutArea;

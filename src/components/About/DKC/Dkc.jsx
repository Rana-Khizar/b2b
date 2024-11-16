import React, { useState } from 'react';
import imgthumb from '../../../assets/faq-thumb.png';
import Layout from '../../../Layout/Layout';
import './Dkc.css';

function Dkc() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
        <div className="faq-area style-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h6 className="section-sub-title">Client Review</h6>
              <h1 className="section-main-title">Most Common <span>Question?</span></h1>
            </div>
            <div className="tab_container">
              <div id="tab1" className="tab_content">
                <ul className="accordion">
                  <li className={activeIndex === 0 ? 'active' : ''}>
                    <a onClick={() => toggleAccordion(0)} className={activeIndex === 0 ? 'active' : ''}>
                      <span>1.Unwavering Values and Principles</span>
                    </a>
                    <p>
                      At the heart of DKC lies a steadfast commitment to ethics, integrity, and excellence.
                      These guiding principles define every interaction with stakeholders, ensuring that our operations reflect respect, transparency, and fairness.
                    </p>
                  </li>
                  <li className={activeIndex === 1 ? 'active' : ''}>
                    <a onClick={() => toggleAccordion(1)} className={activeIndex === 1 ? 'active' : ''}>
                      <span>2.Transformational Social and Cultural Impact</span>
                    </a>
                    <p>
                      DKC's influence extends far beyond business objectives, actively contributing to cultural preservation, artisan empowerment, and meaningful community development.
                      By championing Kashmiri craftsmanship, we secure a legacy that celebrates and sustains a heritage rich in artistry and history.
                    </p>
                  </li>
                  <li className={activeIndex === 2 ? 'active' : ''}>
                    <a onClick={() => toggleAccordion(2)} className={activeIndex === 2 ? 'active' : ''}>
                      <span>3.Innovation and Industry Leadership</span>
                    </a>
                    <p>
                      As pioneers in the handicraft sector, DKC is transforming traditional commerce through groundbreaking technologies and forward-thinking strategies.
                      From blockchain traceability to AI-driven marketing, we are reshaping the industry and setting new benchmarks for excellence.
                    </p>
                  </li>
                  <li className={activeIndex === 3 ? 'active' : ''}>
                    <a onClick={() => toggleAccordion(3)} className={activeIndex === 3 ? 'active' : ''}>
                      <span>4.Enduring Reputation and Trust</span>
                    </a>
                    <p>
                      DKC's legacy is a testament to years of earned respect and credibility. By fostering strong, authentic relationships with customers, partners, and artisans,
                      we have built an unwavering foundation of trust that underscores every facet of our operations.
                    </p>
                  </li>
                  <li className={activeIndex === 4 ? 'active' : ''}>
                    <a onClick={() => toggleAccordion(4)} className={activeIndex === 4 ? 'active' : ''}>
                      <span>5.Sustainability and Global Responsibility</span>
                    </a>
                    <p>
                      Driven by a commitment to environmental stewardship and ethical business practices, DKC ensures that our work aligns with the needs of future generations.
                      Through sustainable sourcing, eco-friendly logistics, and fair trade, we leave a positive and enduring impact on the planet and its people.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb">
              <img src={imgthumb} alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Dkc;
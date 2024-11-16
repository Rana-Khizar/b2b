import React, { useState } from 'react';
import imgthumb from '../../../assets/faq-thumb.png';
import faq1 from "../../../assets/faq1.png";
import Layout from '../../../Layout/Layout';
import './Dkc.css';

function Dkc() {
  const [openIndex, setOpenIndex] = useState(null);
  
	const toggleQuestion = (index) => {
	  setOpenIndex(openIndex === index ? null : index);
	};
  
	const faqs = [
	  {
		question: "1. Unwavering Values and Principles",
		answer: "Appropriately promote enterprise-wide vortals through innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative."
	  },
	  {
		question: "2.	Transformational Social and Cultural Impact",
		answer: "DKC’s influence extends far beyond business objectives, actively contributing to cultural preservation, artisan empowerment, and meaningful community development. By championing Kashmiri craftsmanship, we secure a legacy that celebrates and sustains a heritage rich in artistry and history."
	  },
	  {
		question: "3.	Innovation and Industry Leadership",
		answer: "DKC’s legacy is a testament to years of earned respect and credibility. By fostering strong, authentic relationships with customers, partners, and artisans, we have built an unwavering foundation of trust that underscores every facet of our operations."
	  },
	  {
		question: "4.	Enduring Reputation and Trust",
		answer: "Our services span across multiple industries, including healthcare, finance, technology, and education, providing tailored solutions to meet industry-specific challenges."
	  },
    {
      question: "5.	Sustainability and Global Responsibility",
      answer: "Driven by a commitment to environmental stewardship and ethical business practices, DKC ensures that our work aligns with the needs of future generations. Through sustainable sourcing, eco-friendly logistics, and fair trade, we leave a positive and enduring impact on the planet and its people."
    }
	];

  return (
    <Layout>

<div className="faq-area">
		<div className="container">
		  <div className="row align-items-center">
			<div className="col-lg-6 col-md-12">
			  <div className="section-title text-left">
				<h5 className="section-sub-title">De Koshur Crafts Legacy</h5>
				<h1 className="section-main-title"><span>A Legacy of Excellence and Empowerment</span></h1>
        </div>
        <div className="faq-thumb">
				<img src={faq1} alt="faq1" />
			  </div>
			  
			</div>
			<div className="col-lg-6 col-md-12">
			  <div className="tab_container">
				<div className="accordion">
				  {faqs.map((faq, index) => (
					<div key={index} className="faq-item">
					  <button 
						className="faq-question" 
						onClick={() => toggleQuestion(index)}
					  >
						<span>{faq.question}</span>
						<span>{openIndex === index ? '-' : '+'}</span>
					  </button>
					  {openIndex === index && (
						<div className="faq-answer">{faq.answer}</div>
					  )}
					</div>
				  ))}
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>


        {/* <div className="faq-area style-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <h6 className="section-sub-title">De Koshur Crafts Legacy</h6>
              <h1 className="section-main-title"><span>A Legacy of Excellence and Empowerment</span></h1>
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
    </div> */}
    </Layout>
  );
}

export default Dkc;
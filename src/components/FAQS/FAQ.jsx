import React, { useState } from 'react';
import faq1 from '../../assets/faq1.png'
import './FAQ.css'
// import faq2 from '../../assets/faq2.png'
// import faq3 from '../../assets/faq3.png'


const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);
  
	const toggleQuestion = (index) => {
	  setOpenIndex(openIndex === index ? null : index);
	};
  
	const faqs = [
	  {
		question: "What Medical Services Do You Provide?",
		answer: "Appropriately promote enterprise-wide vortals through innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative."
	  },
	  {
		question: "What is your customer geography?",
		answer: "We serve a global customer base across various geographic regions, catering to diverse market needs with our specialized services."
	  },
	  {
		question: "What are the main industries we serve?",
		answer: "Our services span across multiple industries, including healthcare, finance, technology, and education, providing tailored solutions to meet industry-specific challenges."
	  },
	  {
		question: "What are the main industries we serve?",
		answer: "Our services span across multiple industries, including healthcare, finance, technology, and education, providing tailored solutions to meet industry-specific challenges."
	  }
	];
  
	return (
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
				  <p className="faq-description">
					Alternative innovation network environmental whiteboard pursue for premier 
					methods empowerment go forward opportunities
				  </p>
				</div>
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
	);
  };
  
  export default FAQ;
  

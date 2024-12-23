import React from 'react'
//import counterImage from '../../assets/counter-icon.png'
import aboutUsThu from '../../assets/about-us-thu.png'
import usShape from '../../assets/us-shape.png'
import aboutUsSh from '../../assets/about-us-sh.png'
import aboutUsShe from '../../assets/about-us-she.png'
import { TypingEffectSync } from '../Homepage/About/TypingEffectSync'


const synchronizedTextPairs = [
    // [
    //     "Register Now !!",
       
    // ],
    // [
    //     "200,000 Kashmiri Artisans Impacted",
    //     "Widespread income loss due to counterfeit market.",
    // ],
    // [
    //     "Online Marketplace Deception",
    //     "Fake labels as Handmade Kashmiri crafts.",
    // ],
    // [
    //     "Consumer Mistrust and Decline",
    //     "Buyers hesitate due to authenticity doubts.",
    // ],
    // [
    //     "India's Countermeasures",
    //     "Stricter GI protections for Kashmiri crafts.",
    // ],
];


const RegPatner = () => {
    return (
        <>
            <div className="about-us-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">B2B Connect</h5>
                                <h1 className="section-main-title">Get Started in Just a Few Steps </h1>
                                {/* <h1 className="section-main-title"> <span></span></h1> */}
                                {/* <p className="section-title-descr">Brief introduction highlighting De Koshur Crafts as more than a marketplace—an advocate, investor, and ally in building a global brand for Kashmiri artisans.

                                </p> */}
                            </div>
                            <div className="about-us-content">
                                <div className="about-us-list">
                                    <ul>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Step-by-Step Guide:</span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Step 1:</span><br />
                                        <span>Create an Account - Basic information and contact details.</span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Step 2:</span>
                                        <span>Select Partnership Model - Choose the model that best suits your goals.</span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Step 3:</span>
                                        <span>Complete Registration Form - Provide company details, specialization, and upload required documents.</span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Step 4:</span>
                                        <span>Submit and Await Approval - We’ll review your application and get in touch with next steps</span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>CTO </span><br />
                                        <span>“Register Now” </span></li>
                                        {/* <li><span>A Diplomatic Initiative for Lasting Impact</span></li> */}
                                        {/* <li>
                                            <span>DKC’s Strategic Move: <span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>87</span> Congressmen Engaged</span>
                                        </li> */}
                                    </ul>

                                </div>

                                <div className="solutek-btn">
                                    {/* <a href="about-us.html">EXPLORE MORE
                                        <div class="solutek-hover-btn hover-bx"></div>
                                        <div class="solutek-hover-btn hover-bx2"></div>
                                        <div class="solutek-hover-btn hover-bx3"></div>
                                        <div class="solutek-hover-btn hover-bx4"></div>
                                    </a> */}

                                    {/* <div className="section-title text-left">
                                        <h1 className='section-main-titl text-2xl'>
                                            <ReactTypingEffect
                                                text={["China Kashmir Craft Imitations", "200,000 Kashmiri Artisans Impacted" , "Online Marketplace Deception" , "Consumer Mistrust and Decline" , "India's Countermeasures"]}
                                                speed={100} 
                                                eraseSpeed={50} 
                                                eraseDelay={2000}
                                                typingDelay={500} 
                                            />
                                        </h1>
                                        <h1 className='section-main-titl text-2xl text-orange'>
                                            <span>
                                            <ReactTypingEffect
                                                text={["Machine-made items sold at a fraction.", "Widespread income loss due to counterfeit market." , "Fake labels as Handmade Kashmiri crafts." , "Buyers hesitate due to authenticity doubts." , "Stricter GI protections for Kashmiri crafts."]}
                                                speed={100} 
                                                eraseSpeed={50} 
                                                eraseDelay={2000}
                                                typingDelay={500} 
                                            />
                                            </span>
                                        </h1>
                                    </div> */}
 {/* TypingEffect */}

                                    <TypingEffectSync
                                        textPairs={synchronizedTextPairs}
                                        speed={150} // Typing speed
                                        eraseSpeed={100} // Erasing speed
                                        delay={3000} // Delay before erasing
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-inline">
                            <div className="about-us-thumb">
                                {/* <div className="about-us-video-ico box">
                                    <div className="video-emo-icon venobox venbox-item">
                                        <div className="single-counter-box">
                                            <div className="counter-content">
                                                <h4 className="counter">80%</h4>
                                                <span>+</span>
                                                <p>Satisfied Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="about-us-img">
                                    <img src={aboutUsThu} alt="thumb" />
                                </div>
                                <div className="about-us-shape">
                                    <img src={usShape} alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about2-us-shape">
                        <img src={aboutUsSh} alt="shape" />
                    </div>
                    <div className="about-us-shape2">
                        <img src={aboutUsShe} alt="shape" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegPatner

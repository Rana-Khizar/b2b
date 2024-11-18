import React from 'react'
//import counterImage from '../../assets/counter-icon.png'
import aboutUsThu from '../../assets/about-us-thu.png'
import usShape from '../../assets/us-shape.png'
import aboutUsSh from '../../assets/about-us-sh.png'
import aboutUsShe from '../../assets/about-us-she.png'
//import { TypingEffectSync } from '../Homepage/About/TypingEffectSync'


//const synchronizedTextPairs = [
    // [
    //     "China Kashmir Craft Imitations",
    //     "Machine-made items sold at a fraction.",
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
//];


const PatnerModel = () => {
    return (
        <>
            <div className="about-us-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">B2B Connect</h5>
                                <h1 className="section-main-title">Choose the Partnership Model that Fits Your Business</h1>
                                {/* <h1 className="section-main-title"> <span></span></h1> */}
                            </div>
                            <div className="about-us-content">
                                <div className="about-us-list">
                                    <ul>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>E-Commerce Partnership:</span>
                                        <span>Sell online through De Koshur Crafts’ dedicated platform with access to global customers.
                                        </span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Shared Brick-and-Mortar Partnership:</span>
                                        <span> Showcase products in U.S.-based shared retail spaces for direct customer engagement.
                                        </span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Consignment Partnership:</span>
                                        <span>Test the market risk-free with consignment options in high-traffic locations.
                                        </span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Import-Export Partnership:</span>
                                        <span>Seamless international trade with compliance and logistical support.
                                        </span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Exhibition Partnership:</span>
                                        <span> Participate in trade shows and exhibitions to build brand awareness.
                                        </span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Franchise Partnership:</span>
                                        <span>Open a branded store under De Koshur Crafts with comprehensive support.
                                        </span></li>
                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>Subsidiary Company Partnership:</span>
                                        <span>Gain full operational control and market presence in the U.S.
                                        </span></li>

                                        <li><span></span><span className='text-orange' style={{ display: 'inline-block', margin: '0' }}>CTA: </span> <br />
                                        <span>“Explore Partnership Models”</span>
                                        </li>
            
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
{/* 
                                    <TypingEffectSync
                                        textPairs={synchronizedTextPairs}
                                        speed={150} // Typing speed
                                        eraseSpeed={100} // Erasing speed
                                        delay={3000} // Delay before erasing
                                    /> */}
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

export default PatnerModel

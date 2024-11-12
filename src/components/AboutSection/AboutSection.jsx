import React from 'react'
import aboutImg from '../../assets/about-thu3.png'
import about4 from '../../assets/about4.png'
import ReactTypingEffect from 'react-typing-effect';


const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-lg-6">
              <div className="about-thumb">
                <img src={aboutImg} alt="thumb" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-contact">
                <div className="section-title text-left">
                  <h6 className="section-sub-title">DKC Vendor Partner Registration Portal</h6>
                  <h1 className="section-main-title">Crafting Kashmir's Next Generations </h1>
                  <h1 className="section-main-title">Future <span>Together.</span></h1>
                  {/* <p className="section-title-descr">Amir-e-Kabir's Legacy, Reimagined for Today's World.</p> */}
                </div>
                {/* <div className="about-box-item">
                  <div className="about-box d-flex align-items-center">
                    <div className="about-icon">
                      <img src={about4} alt="about4" />
                    </div>
                    <div className="about-tiltle">
                      <h3>Cloud Based Solution</h3>
                    </div>
                  </div>
                  <div className="about-box d-flex align-items-center">
                    <div className="about-icon">
                      <img src={about4} alt="about4" />
                    </div>
                    <div className="about-tiltle">
                      <h3>Best Services</h3>
                    </div>
                  </div>
                </div> */}

                <div className="about-item-list">
                  <ul>
                    <li> <span className='font-bold' >WE DO BEYOND BUSINESS</span> -Investing $1.4M in Tomorrow’s Leaders <span className='text-orange'>Supporting and Preserving Kashmir's Crafts Beyond Business</span> </li>
                    <li> <span className='font-bold' >UNIQUE BUSINESS MODEL</span> -Partnering with Top Minds for Lasting Impact <span className='text-orange'>Blending Science, Technology, and Craftsmanship for Excellence</span> </li>
                    <li> <span className='font-bold' >OMNI-CHANNEL B2B GROWTH</span> -Strengthening Kashmir’s Entrepreneurs <span className='text-orange'>Expanding and Connecting Kashmir’s Craft Heritage with USA Market</span> </li>
                  </ul>
                </div>
                <div className="section-title text-left">

                  <h1 className="section-main-title">Amir-e-Kabir's Legacy, Reimagined for Today's World Future
                    <span>
                      <ReactTypingEffect
                        text={["Progress.", "Harmony. "]}
                        speed={100} // Typing speed in milliseconds
                        eraseSpeed={50} // Speed for erasing in milliseconds
                        eraseDelay={2000} // Delay before erasing in milliseconds
                        typingDelay={500} // Delay before typing starts in milliseconds
                      />
                    </span>
                  </h1>
                  {/* <h1 className="section-main-title">Future </h1> */}
                  {/* <p className="section-title-descr">Amir-e-Kabir's Legacy, Reimagined for Today's World.</p> */}
                </div>
                {/* <div className="solutek-btn">
                  <a href="about-us.html">EXPLORE MORE
                    <div className="solutek-hover-btn hover-bx"></div>
                    <div className="solutek-hover-btn hover-bx2"></div>
                    <div className="solutek-hover-btn hover-bx3"></div>
                    <div className="solutek-hover-btn hover-bx4"></div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection

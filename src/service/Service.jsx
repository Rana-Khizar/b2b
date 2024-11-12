import React from 'react'
import ser1 from '../assets/service-icon.png'
import ser2 from '../assets/service-icon2.png'
import ser3 from '../assets/ser-icon3.png'
import testi1 from '../assets/testi1.png'
import testAutor from '../assets/test-autor.png'
import testAutor2 from '../assets/test-autor2.png'
import testAutor3 from '../assets/test-autor3.png'

const Service = () => {
  return (
    <>
      <div className="service-area style-two">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center ">
          <h5 className="section-sub-title">B2B Connect</h5>
          <h1 className="section-main-title"> <span>De Koshur Crafts</span>  Leading   </h1>
          <h1 className="section-main-title pt-2">Kashmir’s Craft into a <span>New Era of Global Recognition</span> </h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          <div className="service-box-inner">
            <div className="service-content">
              <h4 className="service-title">Setting Unprecedented Standards in Global Expansion</h4>
              <p className="service-des">De Koshur Craft’s USA presence breaks barriers, setting unmatched standards in global reach for Kashmir’s artisans.
              </p>
            </div>
            <div className="service-icon">
              <img src={ser1} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          <div className="service-box-inner">
            <div className="service-content">
              <h4 className="service-title">Empowering Artisans Through Quality and Fair Trade</h4>
              <p className="service-des">DKC redefines standards with exclusive sourcing, unwavering quality, and fair trade, empowering Kashmiri artisans worldwide.
              </p>
            </div>
            <div className="service-icon">
              <img src={ser2} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          <div className="service-box-inner">
            <div className="service-content">
              <h4 className="service-title">Leading with Ethical and Sustainable Practices</h4>
              <p className="service-des">DKC champions sustainability and cultural pride, creating a legacy of responsible and authentic business standards.
              </p>
            </div>
            <div className="service-icon">
              <img src={ser3} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
    </>
  )
}

export default Service

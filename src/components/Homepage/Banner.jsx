import React from 'react'
import Man from "../../assets/hero-thumb.png"
import { FaPlay } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap';
import Circle from "../../assets/download.png"
function Banner() {
    return (

        <>



            <div className="hero-area d-flex align-items-center">
                <div className="container">
                    <div className="row hero align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-contant">
                                <h5>SOLUTEK IT SERVICES</h5>
                                <h1>The Beauty Behind</h1>
                                <h1>IT Services.</h1>
                                <p>Where your interests international networks intersect provid
                                    custom software solutions for any value software.</p>
                                <div className="solutek-btn">
                                    <a href="about-us.html">EXPLORE MORE
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </a>
                                </div>
                                <div className="hero-video-icon">
                                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://www.youtube.com/watch?v=Wx48y_fOfiY"><i className="bi bi-play"></i><span>WATCH VIDEO</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-thumb d-none d-md-flex">
                                <img src={Man} alt="hero-thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
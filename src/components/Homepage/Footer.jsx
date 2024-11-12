import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import './FooterArea.css';
import Logo from "../../assets/solutek-imagess/footer-logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-area mt-5">
      <Container>
        <Row>
          <Col lg={3} md={6} className="footer-widget">
            <img src={Logo} alt='Logo Footer' className="footer-logo" />
            <p className="footer-description">Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.</p>
            <div className="footer-social-icons">
              <a href="#"><FaFacebook/></a>
              <a href="#"><FaTwitter/></a>
              <a href="#"><FaLinkedin/></a>
              <a href="#"><FaInstagram/></a>
            </div>
          </Col>
          <Col lg={3} md={6} className="footer-widget">
            <h5 className="footer-title">Useful Links</h5>
            <ul className="footer-links">
              <li><a href="#">About Company</a></li>
              <li><a href="#">Meet Our Team</a></li>
              <li><a href="#">Latest Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-widget">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-links">
              <li><a href="#">IT Management</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-widget">
            <h5 className="footer-title">Newsletter</h5>
            <p className="footer-description">Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.</p>
           
            <div className='d-flex'>
                <input type="text" className='inp' />
              <FaPaperPlane className='fplane'/>

            </div>
          </Col>
        </Row>
        <Row className="footer-bottom d-flex justify-content-between">
          <Col md={3}>
            <p>&copy; Copyright 2024 By Solutek</p>
          </Col>
          <Col md={2} className="text-md-right rightt">
            <a href="#">Privacy Policy</a> | <a href="#">Supports</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

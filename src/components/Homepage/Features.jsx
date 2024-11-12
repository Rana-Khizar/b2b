import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeatureArea.css';
import Feature1 from "../../assets/solutek-imagess/feature1.png"
import Feature2 from "../../assets/solutek-imagess/feature2.png"
import Feature3 from "../../assets/solutek-imagess/feature3.png"
import Feature4 from "../../assets/solutek-imagess/feature4.png"
import Feature5 from "../../assets/solutek-imagess/feature5.png"

function FeatureArea() {
  const features = [
    { imgSrc: Feature1, title: "Data Security", text: "Monotonectally solutek in fermentum quis" },
    { imgSrc: Feature2, title: "Digital Marketing", text: "Monotonectally solutek in fermentum quis" },
    { imgSrc: Feature3, title: "IT Consultation", text: "Monotonectally solutek in fermentum quis" },
    { imgSrc: Feature4, title: "Cloud Services", text: "Monotonectally solutek in fermentum quis" },
    // { imgSrc: Feature5, title: "Technology", text: "Monotonectally solutek in fermentum quis" },
  ];

  return (
    <div className="feature-area">
      {/* <Container className='contner'>
        <Row className="about align-items-center ">
          {features.map((feature, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="feature-box">
              <div className="feature-single-box">
                <div className="feature-icon">
                    <div className='scaling-circle'></div>
                  <img src={feature.imgSrc} alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-text">{feature.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container> */}
    </div>
  );
}

export default FeatureArea;

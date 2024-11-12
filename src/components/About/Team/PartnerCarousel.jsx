import React, { useState } from 'react';
import './PartnerCarousel.css'; 
import Layout from '../../../Layout/Layout';
import teampic1 from '../../../assets/Teampics/1.jpg';
import teampic2 from '../../../assets/Teampics/2.jpg';
import teampic3 from '../../../assets/Teampics/3.jpg';
import teampic4 from '../../../assets/Teampics/4.jpg';
import teampic5 from '../../../assets/Teampics/5.jpg';
import teampic6 from '../../../assets/Teampics/6.jpg';
import teampic7 from '../../../assets/Teampics/7.jpg';
import teampic8 from '../../../assets/Teampics/8.png';
import teampic9 from '../../../assets/Teampics/9.jpg';
import teampic10 from '../../../assets/Teampics/10.jpg';
import teampic11 from '../../../assets/Teampics/11.jpg';
import teampic12 from '../../../assets/Teampics/12.jpg';
import teampic13 from '../../../assets/Teampics/13.jpg';
import teampic14 from '../../../assets/Teampics/14.jpg';

const PartnerCarousel = () => {
  const partners = [
    {
      id: 1,
      name: "Fayaz khan",
      image: teampic1,
      title: "Patner"
    },
    {
      id: 2,
      name: "Nora McCormick",
      image: teampic2,
      title: "Patner"
    },
    {
      id: 3,
      name: "Andrew Paxton",
      image: teampic3,
      title: "Patner"
    },
    {
      id: 4,
      name: "Corinne Sinclair",
      image: teampic4,
      title: "Patner"
    },
    {
      id: 5,
      name: "Josedina Delgado",
      image: teampic5,
      title: "Patner"
    },
    {
      id: 6,
      name: "Josfina Sosa",
      image: teampic6,
      title: "Patner"
    },
    {
      id: 7,
      name: "Khan Jasif",
      image: teampic7,
      title: "Patner"
    },
    {
      id: 8,
      name: "Kyra blake",
      image: teampic8,
      title: "Patner"
    },
    {
      id: 9,
      name: "Laura Davenport",
      image: teampic9,
      title: "Patner"
    },
    {
      id: 10,
      name: "Meteo Evans",
      image: teampic10,
      title: "Patner"
    },
    {
      id: 11,
      name: "Matthew Boyd",
      image: teampic11,
      title: "Patner"
    },
    {
      id: 12,
      name: "Reed Wilder",
      image: teampic12,
      title: "Patner"
    },
    {
      id: 13,
      name: "Susan Scheff",
      image: teampic13,
      title: "Patner"
    },
    {
      id: 14,
      name: "Miles",
      image: teampic14,
      title: "Patner"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const getVisiblePartners = () => {
    const result = [];
    const prev = currentIndex === 0 ? partners.length - 1 : currentIndex - 1;
    const next = currentIndex === partners.length - 1 ? 0 : currentIndex + 1;
    
    result.push(partners[prev]);
    result.push(partners[currentIndex]);
    result.push(partners[next]);
    
    return result;
  };

  return (
    //<div className="carousel-container bg-blue">  
    <Layout>
    
    <div className="carousel ">
      <h1 className="carousel__title ">Meet Our Partners</h1>
      
      <div className="carousel__container">
        <div className="carousel__track">
          {getVisiblePartners().map((partner, index) => {
            const position = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
            
            return (
              <div
                key={partner.id}
                className={`carousel__card carousel__card--${position}`}
              >
                <div className="carousel__card-inner ">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="carousel__image"
                  />
                  <div className="carousel__content bg-theme">
                    <h3 className="carousel__name carousel__content--center">{partner.name}</h3>
                    <p className="carousel__title-text">{partner.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel__nav">
          <button className="carousel__button" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button className="carousel__button" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    </Layout>
 // </div>
  );
};

export default PartnerCarousel;
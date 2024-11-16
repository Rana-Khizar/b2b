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
    { id: 1, name: "Fayaz Khan", image: teampic1, title: "Partner" },
    { id: 2, name: "Nora McCormick", image: teampic2, title: "Partner" },
    { id: 3, name: "Andrew Paxton", image: teampic3, title: "Partner" },
    { id: 4, name: "Corinne Sinclair", image: teampic4, title: "Partner" },
    { id: 5, name: "Josedina Delgado", image: teampic5, title: "Partner" },
    { id: 6, name: "Josfina Sosa", image: teampic6, title: "Partner" },
    { id: 7, name: "Khan Jasif", image: teampic7, title: "Partner" },
    { id: 8, name: "Kyra Blake", image: teampic8, title: "Partner" },
    { id: 9, name: "Laura Davenport", image: teampic9, title: "Partner" },
    { id: 10, name: "Meteo Evans", image: teampic10, title: "Partner" },
    { id: 11, name: "Matthew Boyd", image: teampic11, title: "Partner" },
    { id: 12, name: "Reed Wilder", image: teampic12, title: "Partner" },
    { id: 13, name: "Susan Scheff", image: teampic13, title: "Partner" },
    { id: 14, name: "Miles", image: teampic14, title: "Partner" },
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

  // Team Data
  const functionalTeam = [
    { name: 'Director of Marketing and Outreach', title: 'Oversees branding, advertising, and global customer engagement.' },
    { name: 'Director of Vendor Partnership Management', title: 'Manages vendor onboarding, training, and support services.' },
    { name: 'Director of Sustainability and Ethics', title: 'Ensures green logistics, fair trade compliance, and ethical practices.' },
    { name: 'Director of Customer Experience', title: 'Manages omnichannel customer interactions and satisfaction.' },
    { name: 'Director of Logistics (Warehousing/Shipping)', title: 'Handles inventory management, order fulfillment, and shipping optimization.' }
  ];

  const tacticalTeam = [
    { name: 'E-Commerce Operations Manager', title: 'Executes day-to-day tasks on the e-commerce platform.' },
    { name: 'Retail Store Manager', title: 'Supervises in-store operations and customer interactions.' },
    { name: 'Exhibitions Coordinator', title: 'Manages logistics and vendor participation in trade shows and cultural events.' },
    { name: 'Import-Export Logistics Manager', title: 'Ensures smooth customs clearance and global delivery.' },
    { name: 'Consignment Manager', title: 'Oversees re-commerce and consignment workflows.' }
  ];

  const departmentalTeam = [
    { name: 'Head of Digital Marketing', title: 'Manages SEO, programmatic advertising, and content strategies.' },
    { name: 'Head of Product Design', title: 'Ensures product quality and alignment with Kashmiri heritage.' },
    { name: 'Head of Training and Development', title: 'Conducts artisan workshops and quality assurance programs.' },
    { name: 'Head of Inventory Control', title: 'Supervises inventory levels and ensures timely restocking.' },
    { name: 'Head of Finance and Compliance', title: 'Handles accounting, regulatory adherence, and risk management.' }
  ];

  const regionalLeadership = [
    { name: 'Jasif Ahmad Khan', title: 'India Country Head – Oversees DKC’s operations in India subsidiary.' },
    { name: 'Regional Director, North America', title: 'Manages DKC’s presence in the U.S. and Canada.' },
    { name: 'Regional Director, Europe', title: 'Focuses on expansion and partnerships in the European market.' },
    { name: 'Regional Manager, Asia-Pacific', title: 'Drives market engagement and partnerships in Asia-Pacific.' },
    { name: 'Middle East Operations Manager', title: 'Handles logistics, sales, and partnerships in the Middle East.' }
  ];

  const managerialTier = [
    { name: 'Vendor Relations Manager', title: 'Acts as the point of contact for artisan support and issue resolution.' },
    { name: 'Marketing Campaign Manager', title: 'Executes specific campaigns and tracks their performance.' },
    { name: 'Warehouse Manager', title: 'Manages storage, packaging, and dispatch activities.' },
    { name: 'Customer Support Manager', title: 'Leads customer service representatives and ensures high satisfaction.' },
    { name: 'Quality Assurance Manager', title: 'Monitors product standards and ensures compliance with certifications.' }
  ];
 
  // Strategic Leadership Team and Advisory Boards Data
  const strategicLeadershipTeam = [
    { name: 'Chief Executive Officer (CEO)', title: 'Oversees the overall strategic direction of the company.' },
    { name: 'Susan Scheff, President', title: 'Ensures mission alignment and cross-vertical collaboration.' },
    { name: 'Chief Financial Officer (CFO)', title: 'Manages strategic financial planning and investments.' },
    { name: 'Chief Technology Officer (CTO)', title: 'Drives technological innovation to support strategic objectives.' },
    { name: 'Chief Operating Officer (COO)', title: 'Implements strategies across operational frameworks and ensures execution.' }
  ];

  const advisoryBoards = [
    { name: 'Strategic Advisory Board', members: ['Global Trade Advisor', 'E-Commerce Innovation Expert', 'Sustainability Advisor', 'Brand Strategy Consultant', 'Business Development Strategist'] },
    { name: 'Cultural Preservation Board', members: ['Artisan Heritage Specialist', 'Ethics and Fair-Trade Advocate', 'Cultural Historian', 'Handicraft Certification Expert', 'Regional Artisan Liaison'] },
    { name: 'Technology and Innovation Advisory Board', members: ['Blockchain Specialist', 'AI and Data Analytics Consultant', 'AR/VR Expert', 'Cybersecurity Advisor', 'Tech Scalability Strategist'] },
    { name: 'Market Expansion and Partnerships Board', members: ['Regional Market Expert (North America)', 'Franchising Consultant', 'Exhibition and Trade Show Specialist', 'Import-Export Legal Advisor', 'Retail Partnership Expert'] },
    { name: 'Artisan Empowerment Board', members: ['Capacity Building Specialist', 'Microfinance and Grants Consultant', 'Social Impact Strategist', 'Startup Mentor', 'Resource Allocation Advisor'] }
  ];

  return (
    <Layout>
      <div className="container-team">
      <div className="carousel">
        <h1 className="carousel__title">Meet Our Partners</h1>
        <div className="carousel__container">
          <div className="carousel__track">
            {getVisiblePartners().map((partner, index) => {
              const position = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
              return (
                <div key={partner.id} className={`carousel__card carousel__card--${position}`}>
                  <div className="carousel__card-inner">
                    <img src={partner.image} alt={partner.name} className="carousel__image" />
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
      <div className="leadership-section">
        <h2 className="section-title">Strategic Leadership Team</h2>
        <div className="leadership-team">
          {strategicLeadershipTeam.map((member, index) => (
            <div key={index} className="team-member">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Advisory Boards</h2>
        <div className="advisory-boards">
          {advisoryBoards.map((board, index) => (
            <div key={index} className="board">
              <h3 className="board-name">{board.name}</h3>
              <ul className="board-members">
                {board.members.map((member, memberIndex) => (
                  <li key={memberIndex} className="member-name">{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Team Sections */}
      <div className="team-section">
        <h2 className="section-title">Functional Team</h2>
        <div className="team-list">
          {functionalTeam.map((member, index) => (
            <div key={index} className="team-member">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Tactical Team</h2>
        <div className="team-list">
          {tacticalTeam.map((member, index) => (
            <div key={index} className="team-member">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Departmental Team</h2>
        <div className="team-list">
          {departmentalTeam.map((member, index) => (
            <div key={index} className="team-member">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Regional Leadership</h2>
        <div className="team-list">
          {regionalLeadership.map((member, index) => (
            <div key={index} className="team-member">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Managerial Tier</h2>
        <div className="team-list">
          {managerialTier.map((member, index) => (
            <div key={index} className="team-member">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="project-bg-shape">
        <div className="project-bg-shape1 moveLeftBounce">
          <img src="assets/images/home-two/project-rs.png" alt="Shape" />
        </div>
        <div className="project-bg-shape2 bounce-animate3">
          <img src="assets/images/home-two/project-ws.png" alt="Shape" />
        </div>
      </div> */}
      </div>
    </Layout>
  );
};

export default PartnerCarousel;
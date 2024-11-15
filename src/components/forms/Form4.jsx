// src/components/Form4.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css'
import Layout from '../../Layout/Layout';

const Form4 = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/form3');
  };

  return (
    <div className="form bg-blue">
    <Layout>
    <div className="form-container">
      <h2 className="form-title">Business Contact Person</h2>

      <label className="form-label">First Name:</label>
      <input type="text" className="form-input" placeholder="Enter first name" />

      <label className="form-label">Last Name:</label>
      <input type="text" className="form-input" placeholder="Enter last name" />

      <label className="form-label">Title:</label>
      <input type="text" className="form-input" placeholder="Enter job title" />

      <label className="form-label">Phone Number:</label>
      <input type="tel" className="form-input" placeholder="Enter phone number" />

      <label className="form-label">Email:</label>
      <input type="email" className="form-input" placeholder="Enter email" />

      <div className="form-navigation">
        <button className="form-button" onClick={handlePrevious}>Previous</button>
        <button className="form-button" onClick={() => alert("Form submission complete!")}>Submit</button>
      </div>
    </div>
    </Layout>
    </div>
  );
};

export default Form4;

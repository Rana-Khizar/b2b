// src/components/Form3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css'
import Layout from '../../Layout/Layout';

const Form3 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/form4');
  };

  const handlePrevious = () => {
    navigate('/form2');
  };

  return (
    <div className="form bg-blue">
      <Layout>
    <div className="form-container">
      <h2 className="form-title">Tax Information</h2>

      <label className="form-label">Tax Identification Number:</label>
      <input type="text" className="form-input" placeholder="Enter Tax ID" />

      <label className="form-label">GST Number:</label>
      <input type="text" className="form-input" placeholder="Enter GST Number" />

      <label className="form-label">Import Export Code:</label>
      <input type="text" className="form-input" placeholder="Enter Import Export Code" />

      <label className="form-label">Bank Name:</label>
      <input type="text" className="form-input" placeholder="Enter Bank Name" />

      <label className="form-label">Bank Account Number:</label>
      <input type="text" className="form-input" placeholder="Enter Account Number" />

      <div className="form-navigation">
        <button className="form-button" onClick={handlePrevious}>Previous</button>
        <button className="form-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </Layout>
    </div>
  );
};

export default Form3;

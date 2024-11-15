// src/components/Form2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css'
//import './Form1.css'
import Layout from '../../Layout/Layout';

const Form2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/form3');
  };

  const handlePrevious = () => {
    navigate('/form1');
  };

  return (
    <div className="form bg-blue">
    <Layout>
    <div className="form-container">
      <h2 className="form-title">Business Details</h2>

      <label className="form-label">Business Type:</label>
      <input type="text" className="form-input" placeholder="e.g., Online Retail" />

      <label className="form-label">Year Established:</label>
      <input type="number" className="form-input" placeholder="e.g., 2022" />

      <label className="form-label">Annual Revenue:</label>
      <input type="text" className="form-input" placeholder="e.g., $500,000" />

      <label className="form-label">Number of Employees:</label>
      <input type="number" className="form-input" placeholder="e.g., 50" />

      <div className="form-navigation">
        <button className="form-button" onClick={handlePrevious}>Previous</button>
        <button className="form-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </Layout> 
    </div>
  );
};

export default Form2;

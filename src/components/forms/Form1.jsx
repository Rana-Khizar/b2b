// src/components/Form1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css'
import Layout from '../../Layout/Layout';

const Form1 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/form2');
  };

  return (
    <div className="form-wrapper">
      <Layout>
        <div className="form-container">
          <h2 className="form-title">Vendor Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Business Name:</label>
              <input type="text" className="form-input" placeholder="Enter business name" />
            </div>
            <div className="form-group">
              <label className="form-label">Business Legal Structure:</label>
              <input type="text" className="form-input" placeholder="e.g., Sole Proprietorship" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Business Type:</label>
              <input type="text" className="form-input" placeholder="e.g., Online Retail" />
            </div>
            <div className="form-group">
              <label className="form-label">Business Registration Number:</label>
              <input type="text" className="form-input" placeholder="Enter registration number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Business Affiliations:</label>
              <input type="text" className="form-input" placeholder="Enter affiliations" />
            </div>
          </div>

          <h5 className="form-subtitle">Business Mailing Address</h5>
          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Street address" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Street Address 2" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" placeholder="City" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="State" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Zip Code" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Country" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Business Email:</label>
              <input type="email" className="form-input" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label className="form-label">Business Phone:</label>
              <input type="tel" className="form-input" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Business Website:</label>
              <input type="text" className="form-input" placeholder="Enter website URL" />
            </div>
          </div>

          <div className="form-navigation">
            <button className="form-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Form1;

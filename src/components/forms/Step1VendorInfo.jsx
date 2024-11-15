import React, { useState } from "react";
import "./Step1VendorInfo.css";
import Layout from "../../Layout/Layout";

const Step1VendorInfo = ({ onNext, updateFormData }) => {
  const [vendorInfo, setVendorInfo] = useState({
    businessName: "",
    registrationNumber: "",
    country: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorInfo({ ...vendorInfo, [name]: value });
  };

  const handleNext = () => {
    updateFormData(vendorInfo);
    onNext();
  };

  return (
    <Layout>
    <div className="form-step">
      <h2>Vendor Information</h2>
      <div className="grid-container">
        <div className="grid-item">
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={vendorInfo.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="registrationNumber">Business Registration Number:</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={vendorInfo.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="country">Country of Registration:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={vendorInfo.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="contactPerson">Primary Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={vendorInfo.contactPerson}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={vendorInfo.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="email">Contact Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={vendorInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={vendorInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-item">
          <label htmlFor="website">Website or Online Store URL:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={vendorInfo.website}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-container">
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
    </Layout>
  );
};

export default Step1VendorInfo;
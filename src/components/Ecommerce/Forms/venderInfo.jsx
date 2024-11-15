import React from 'react'
import Layout from '../../../Layout/Layout'


export default function venderInfo() {
 
  return (
    <Layout>
    <>
    <div className=''>
      <h1>Vender Information</h1>
    <div className='mt-4 mb-4 '>  
        <div className="mb-3">
          Business Name:
          <label htmlFor="businessName" className="form-label">Business Name</label>
          <input type="text" className="form-control" id="businessName" placeholder="" />
        </div>

        <div className="mb-3">
          Business legal structure:
          <label htmlFor="legalStructure" className="form-label">Business legal structure</label>
          <input type="text" className="form-control" id="legalStructure" placeholder="" />
          </div>

        <div className="mb-3">
          Business Type:
          <label htmlFor="businessType" className="form-label">Business Type</label>
          <input type="text" className="form-control" id="businessType" placeholder="" />
        </div>

        <div className="mb-3">
          Business Year:
          <label htmlFor="businessYear" className="form-label">Business Year</label>
          <input type="text" className="form-control" id="businessYear" placeholder="" />
        </div>

        <div className="mb-3">
          Business Registration Number:
          <label htmlFor="registrationNumber" className="form-label">Business Registration Number</label>
          <input type="text" className="form-control" id="registrationNumber" placeholder="" />
        </div>

        <div className="mb-3">
          Brand Affiliations
          <label htmlFor="brandAffiliations" className="form-label">Brand Affiliations</label>
          <input type="text" className="form-control" id="brandAffiliations" placeholder="" />
        </div>

        <div className="mb-3">
          Country Registration:
          <label htmlFor="countryRegistration" className="form-label">Country Registration</label>
          <input type="text" className="form-control" id="countryRegistration" placeholder="" />
        </div>

        <div className="mb-3">
          Primary Contact Person:
          <label htmlFor="primaryContactPerson" className="form-label">Primary Contact Person</label>
          <input type="text" className="form-control" id="primaryContactPerson" placeholder="" />
        
        </div>

        <div className="mb-3">
          Job Title:
          <label htmlFor="jobTitle" className="form-label">Job Title</label>
          <input type="text" className="form-control" id="registrationNumber" placeholder="" />
        </div>
          
         <div className="row mb-3">
          Business Mailing Address
          <div className="col-md-7">
            <br />
            <label htmlFor="streetAddress" className="form-label">Street Address</label>
            <input type="text" className="form-control" id="streetAddress" placeholder="Street Address 1" />
          </div>
          <div className="col-md-6">
            <label htmlFor="streetAddress2" className="form-label">Street Address 2 (optional)</label>
            <input type="text" className="form-control" id="streetAddress2" placeholder="Street Address 2" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" placeholder="City" />
          </div>
          <div className="col-md-6">
            <label htmlFor="postalCode" className="form-label">Postal/ZIP Code</label>
            <input type="text" className="form-control" id="postalCode" placeholder="Postal/ZIP Code" />
          </div>
        </div>

        <div className="mb-3">
        Business Phone Number
          <label htmlFor="phoneNumber" className="form-label">Business Phone Number</label>
          <input type="tel" className="form-control" id="phoneNumber" placeholder="" />
        </div>

        <div className="mb-3">
        Business Email
          <label htmlFor="email" className="form-label">Business Email</label>
          <input type="email" className="form-control" id="email" placeholder="" />
        </div>

        <div className="mb-3">
          Business Website (if applicable):
          <label htmlFor="website" className="form-label">Website</label>
          <input type="url" className="form-control" id="website" placeholder="" />
        </div>
      </div>
    </div>
    </>
    </Layout>

  )
}


import React from 'react'

const Form1 = () => {
  return (
    <>
      <div className='mt-4 mb-4'>
        <div className="mb-3">
          <label htmlFor="businessName" className="form-label">Business Name</label>
          <input type="text" className="form-control" id="businessName" placeholder="Enter business name" />
        </div>

        <div className="mb-3">
          <label htmlFor="legalStructure" className="form-label">Business Legal Structure</label>
          <input type="text" className="form-control" id="legalStructure" placeholder="e.g., LLC, Corporation" />
        </div>

        <div className="mb-3">
          <label htmlFor="businessType" className="form-label">Business Type</label>
          <input type="text" className="form-control" id="businessType" placeholder="e.g., Retail, Services" />
        </div>

        <div className="mb-3">
          <label htmlFor="businessYear" className="form-label">Year Established</label>
          <input type="number" className="form-control" id="businessYear" placeholder="Enter year of establishment" />
        </div>

        <div className="mb-3">
          <label htmlFor="registrationNumber" className="form-label">Business Registration Number</label>
          <input type="text" className="form-control" id="registrationNumber" placeholder="Enter registration number" />
        </div>

        <div className="mb-3">
          <label htmlFor="brandAffiliations" className="form-label">Brand Affiliations</label>
          <input type="text" className="form-control" id="brandAffiliations" placeholder="Enter brand affiliations" />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="streetAddress" className="form-label">Mailing Address - Street Address</label>
            <input type="text" className="form-control" id="streetAddress" placeholder="Enter street address" />
          </div>
          <div className="col-md-6">
            <label htmlFor="streetAddress2" className="form-label">Street Address 2 (optional)</label>
            <input type="text" className="form-control" id="streetAddress2" placeholder="Apt, Suite, etc." />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" placeholder="Enter city" />
          </div>
          <div className="col-md-6">
            <label htmlFor="postalCode" className="form-label">Postal/ZIP Code</label>
            <input type="text" className="form-control" id="postalCode" placeholder="Enter postal/ZIP code" />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Business Phone Number</label>
          <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Business Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>

        <div className="mb-3">
          <label htmlFor="website" className="form-label">Website</label>
          <input type="url" className="form-control" id="website" placeholder="Enter website URL" />
        </div>
      </div>

    </>
  )
}

export default Form1

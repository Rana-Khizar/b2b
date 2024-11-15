import React from 'react'
import Layout from '../../../Layout/Layout'

function TaxForm() {
    return (
        <Layout>
        <>
            <form className='mt-4'>
                <h1>Tax Information</h1>
                {/* Row for Tax Identification Number, GST Number, Import Export Code */}
                <div className="row mb-3">
                    <div className="col-md-4">
                    Tax Identification Number
                        <label htmlFor="taxId" className="form-label">Tax Identification Number</label>
                        <input type="text" className="form-control" id="taxId" placeholder="Enter Number" />
                    </div>
                    <div className="col-md-4">
                        GST Number
                        <label htmlFor="gstNumber" className="form-label">GST Number</label>
                        <input type="text" className="form-control" id="gstNumber" placeholder="Enter Number" />
                    </div>
                    <div className="col-md-4">
                        Import Export Code
                        <label htmlFor="importExportCode" className="form-label">Import Export Code</label>
                        <input type="text" className="form-control" id="importExportCode" placeholder="Enter Code" />
                    </div>
                </div>

                {/* Row for Bank Name, Bank Account Name, Bank Account Number */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        Bank Name
                        <label htmlFor="bankName" className="form-label">Bank Name</label>
                        <input type="text" className="form-control" id="bankName" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-4">
                        Bank Account Name
                        <label htmlFor="bankAccountName" className="form-label">Bank Account Name</label>
                        <input type="text" className="form-control" id="bankAccountName" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-4">
                        Bank Account Number
                        <label htmlFor="bankAccountNumber" className="form-label">Bank Account Number</label>
                        <input type="text" className="form-control" id="bankAccountNumber" placeholder="Enter Number" />
                    </div>
                </div>

                {/* Row for SWIFT/BIC Code and IBAN Code */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        SWIFT/BIC Code
                        <label htmlFor="swiftBicCode" className="form-label">SWIFT/BIC Code</label>
                        <input type="text" className="form-control" id="swiftBicCode" placeholder="Enter Code" />
                    </div>
                    <div className="col-md-6">
                        IBAN Code
                        <label htmlFor="ibanCode" className="form-label">IBAN Code</label>
                        <input type="text" className="form-control" id="ibanCode" placeholder="Enter Code" />
                    </div>
                </div>
                {/* Row for Legal or Regulatory Issues Related to Banking Compliance */}
                <div className="row mb-3">
    <div className="col-md-12">
        Any Legal or Regulatory Issue Related to Banking Compliance in Last 5 Years?
        <label htmlFor="legalRegulatoryIssue" className="form-label">
            Any Legal or Regulatory Issue Related to Banking Compliance in Last 5 Years?
        </label>   
        {/* Dropdown for Yes/No */}
        <select className="form-select mb-2" id="legalRegulatoryIssueSelect">
            <option value="">Select Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>
</div>
                {/* Row for Ever Kept on Fraud Detection List */}
                <div className="row mb-3">
                    <div className="col-md-12">
                            Ever Kept on Fraud Detection List?
                        <label htmlFor="fraudDetectionList" className="form-label">Ever Kept on Fraud Detection List?</label>
                        <textarea className="form-control" id="fraudDetectionList" rows={3} placeholder="Provide details here..." defaultValue={""} />
                    </div>
                </div>
            </form>

        </>
        </Layout>
    )
}

export default TaxForm


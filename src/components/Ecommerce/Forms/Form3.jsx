import React from 'react'

const Form3 = () => {
    return (
        <>
            <form className='mt-4'>
                {/* Row for Tax Identification Number, GST Number, Import Export Code */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="taxId" className="form-label">Tax Identification Number</label>
                        <input type="text" className="form-control" id="taxId" placeholder="Tax Identification Number" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="gstNumber" className="form-label">GST Number</label>
                        <input type="text" className="form-control" id="gstNumber" placeholder="GST Number" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="importExportCode" className="form-label">Import Export Code</label>
                        <input type="text" className="form-control" id="importExportCode" placeholder="Import Export Code" />
                    </div>
                </div>
                {/* Row for Bank Name, Bank Account Name, and Bank Account Number */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="bankName" className="form-label">Bank Name</label>
                        <input type="text" className="form-control" id="bankName" placeholder="Bank Name" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="bankAccountName" className="form-label">Bank Account Name</label>
                        <input type="text" className="form-control" id="bankAccountName" placeholder="Bank Account Name" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="bankAccountNumber" className="form-label">Bank Account Number</label>
                        <input type="text" className="form-control" id="bankAccountNumber" placeholder="Bank Account Number" />
                    </div>
                </div>
                {/* Row for SWIFT/BIC Code and IBAN Code */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="swiftBicCode" className="form-label">SWIFT/BIC Code</label>
                        <input type="text" className="form-control" id="swiftBicCode" placeholder="SWIFT/BIC Code" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="ibanCode" className="form-label">IBAN Code</label>
                        <input type="text" className="form-control" id="ibanCode" placeholder="IBAN Code" />
                    </div>
                </div>
                {/* Row for Legal or Regulatory Issues Related to Banking Compliance */}
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="legalRegulatoryIssue" className="form-label">Any Legal or Regulatory Issue Related to Banking Compliance in Last 5 Years?</label>
                        <textarea className="form-control" id="legalRegulatoryIssue" rows={3} placeholder="Provide details here..." defaultValue={""} />
                    </div>
                </div>
                {/* Row for Ever Kept on Fraud Detection List */}
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="fraudDetectionList" className="form-label">Ever Kept on Fraud Detection List?</label>
                        <textarea className="form-control" id="fraudDetectionList" rows={3} placeholder="Provide details here..." defaultValue={""} />
                    </div>
                </div>
            </form>

        </>
    )
}

export default Form3

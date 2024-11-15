import React, { useState } from "react";
import "./Step8DocumentUpload.css";
import Layout from "../../Layout/Layout";

const Step8DocumentUpload = ({ onNext, onPrevious }) => {
  const [files, setFiles] = useState({});

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({ ...files, [name]: selectedFiles[0] });
  };

  const renderUploadedFileName = (name) => {
    return files[name] ? <span className="uploaded-file">{files[name].name}</span> : null;
  };

  return (
    <Layout>
    <div className="form-step">
      <h2>Document Uploads</h2>
      <form>
        <div className="form-group">
          <label>Business Registration Certificate</label>
          <input
            type="file"
            name="businessRegistration"
            className="file-input"
            onChange={handleFileChange}
          />
          {renderUploadedFileName("businessRegistration")}
        </div>

        <div className="form-group">
          <label>Tax Identification Number (TIN)</label>
          <input
            type="file"
            name="taxIdentification"
            className="file-input"
            onChange={handleFileChange}
          />
          {renderUploadedFileName("taxIdentification")}
        </div>

        <div className="form-group">
          <label>Product Certification(s) (if applicable)</label>
          <input
            type="file"
            name="productCertifications"
            className="file-input"
            onChange={handleFileChange}
          />
          {renderUploadedFileName("productCertifications")}
        </div>

        <div className="form-group">
          <label>Quality Assurance Certification(s) (if applicable)</label>
          <input
            type="file"
            name="qualityCertifications"
            className="file-input"
            onChange={handleFileChange}
          />
          {renderUploadedFileName("qualityCertifications")}
        </div>

        <div className="form-group">
          <label>Product Catalog/Portfolio (optional)</label>
          <input
            type="file"
            name="productCatalog"
            className="file-input"
            onChange={handleFileChange}
          />
          {renderUploadedFileName("productCatalog")}
        </div>

        <div className="button-group">
          <button type="button" className="btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button type="button" className="btn-primary" onClick={onNext}>
            Next
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default Step8DocumentUpload;

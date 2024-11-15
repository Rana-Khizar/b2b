import React from "react";
import Layout from "../../Layout/Layout";
import "./Step4Compliance.css";

const Step4Compliance = ({ onNext, onPrevious }) => {
  
  return (
    <Layout>
          <div className="form-step">
      <h2>Compliance and Certifications</h2>
      <form>
      <div className="form-group">
          <label htmlFor="ethical-sourcing">Do you comply with ethical sourcing standards?</label>
          <select className="dropdown">
            <option value="Select any"> Seclect Any</option>
            <option value="yes">Yes</option>
            <option value="No">No</option>
            <option value="In progress">In Progress</option>
            </select>
        </div>
      <h2>Certifications Held</h2>
      <p>Select all that apply and upload documents below:</p>
        <div className="form-group">
          <div className="checkbox-group">
            <label>
              <input type="checkbox" />
              Fair Trade
            </label>
            <label>
              <input type="checkbox" />
              Organic
            </label>
            <label>
              <input type="checkbox" />
              ISO 9001 Quality Management
            </label>
            <label>
              <input type="checkbox" />
              Environmentally Sustainable
            </label>
            <label>
              <input type="checkbox" />
              GI Certification
            </label>
            <label>
              <input type="checkbox" />
              Handicraft Certification
            </label>
            <label>
              <input type="checkbox" />
              Other:
              <input
                type="text"
                placeholder="Specify other certifications"
                className="other-input"
              />
            </label>
          </div>
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

export default Step4Compliance;

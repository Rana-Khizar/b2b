import React from "react";
<<<<<<< Updated upstream
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
=======
import "./Step4Compliance.css";

const Step4Compliance = ({ onNext, onPrevious }) => {
  return (
    <div className="form-step">
      <h2>Compliance and Certifications</h2>
      <form>
        <div className="form-group">
          <label htmlFor="certifications">Certifications Achieved:</label>
          <input 
            type="text" 
            id="certifications" 
            placeholder="e.g., ISO 9001, Fair Trade" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="compliance">Compliance Standards Followed:</label>
          <input 
            type="text" 
            id="compliance" 
            placeholder="e.g., GDPR, Environmental Compliance" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="audits">Have you undergone any audits?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="audits" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="audits" value="no" /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Do you comply with child labor laws?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="childLabor" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="childLabor" value="no" /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Additional Comments:</label>
          <textarea 
            id="additionalComments" 
            rows="4" 
            placeholder="Provide any additional details about compliance." 
          />
        </div>

>>>>>>> Stashed changes
        <div className="button-group">
          <button type="button" className="btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button type="button" className="btn-primary" onClick={onNext}>
            Next
          </button>
        </div>
<<<<<<< Updated upstream

      </form>
    </div>
   </Layout> 
=======
      </form>
    </div>
>>>>>>> Stashed changes
  );
};

export default Step4Compliance;

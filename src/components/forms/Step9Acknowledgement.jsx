import React, { useState } from "react";
import "./Step9Acknowledgement.css";
<<<<<<< Updated upstream
import Layout from "../../Layout/Layout";
=======
>>>>>>> Stashed changes

const Step9Acknowledgement = ({ onNext, onPrevious }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeCodeOfConduct, setAgreeCodeOfConduct] = useState(false);
  const [confirmInfo, setConfirmInfo] = useState(false);

  const handleTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleCodeOfConductChange = () => {
    setAgreeCodeOfConduct(!agreeCodeOfConduct);
  };

  const handleConfirmChange = () => {
    setConfirmInfo(!confirmInfo);
  };

  return (
<<<<<<< Updated upstream
    <Layout>
      <div className="form-step">
        <h2>Agreement and Acknowledgement</h2>
        <form>
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={handleTermsChange}
                className="checkbox-input"
              />
              I have read and agree to the De Koshur Crafts Vendor Terms & Conditions, including quality standards, return policies, and ethical sourcing requirements.
            </label>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeCodeOfConduct}
                onChange={handleCodeOfConductChange}
                className="checkbox-input"
              />
              I agree to abide by De Koshur Crafts' Vendor Code of Conduct, maintaining ethical standards and high-quality craftsmanship.
            </label>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={confirmInfo}
                onChange={handleConfirmChange}
                className="checkbox-input"
              />
              I confirm that the information provided in this form is accurate and up-to-date.
            </label>
          </div>

          <div className="button-group">
            <button type="button" className="btn-secondary" onClick={onPrevious}>
              Previous
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={onNext}
              disabled={!agreeTerms || !agreeCodeOfConduct || !confirmInfo}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Step9Acknowledgement;
=======
    <div className="form-step">
      <h2>Agreement and Acknowledgement</h2>
      <form>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={handleTermsChange}
            />
            I have read and agree to the De Koshur Crafts Vendor Terms & Conditions, including quality standards, return policies, and ethical sourcing requirements.
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agreeCodeOfConduct}
              onChange={handleCodeOfConductChange}
            />
            I agree to abide by De Koshur Crafts' Vendor Code of Conduct, maintaining ethical standards and high-quality craftsmanship.
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={confirmInfo}
              onChange={handleConfirmChange}
            />
            I confirm that the information provided in this form is accurate and up-to-date.
          </label>
        </div>

        <div className="button-group">
          <button type="button" className="btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={onNext}
            disabled={!agreeTerms || !agreeCodeOfConduct || !confirmInfo}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step9Acknowledgement;
>>>>>>> Stashed changes

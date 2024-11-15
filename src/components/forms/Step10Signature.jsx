import React, { useState } from "react";
import "./Step10Signature.css";
<<<<<<< Updated upstream
import Layout from "../../Layout/Layout";
=======
>>>>>>> Stashed changes

const Step10Signature = ({ onPrevious }) => {
  const [signature, setSignature] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSignatureChange = (e) => {
    setSignature(e.target.value);
  };

  const handleSubmit = () => {
    if (signature) {
      setSubmissionSuccess(true);
      // Optionally clear the signature after submission or redirect elsewhere
      setTimeout(() => {
        // Reset the success notification after 3 seconds
        setSubmissionSuccess(false);
      }, 3000);
    }
  };

  return (
<<<<<<< Updated upstream
  <Layout>
=======
>>>>>>> Stashed changes
    <div className="form-step">
      <h2>Signature and Submission</h2>
      <form>
        <div className="form-group">
          <label htmlFor="signature">Authorized Representative Signature:</label>
          <textarea
            id="signature"
            className="form-input"
            placeholder="Sign your name here..."
            value={signature}
            onChange={handleSignatureChange}
            rows="4"
          />
        </div>

        {/* Success message */}
        {submissionSuccess && (
          <div className="success-message">
            <p>Your form has been submitted successfully!</p>
          </div>
        )}

        <div className="button-group">
          <button type="button" className="btn-secondary" onClick={onPrevious}>
            Previous
          </button>
          {/* Show submit button when there's a signature */}
          <button
            type="button"
            className="btn-primary"
            onClick={handleSubmit}
            disabled={!signature}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
<<<<<<< Updated upstream
    </Layout>  
=======
>>>>>>> Stashed changes
  );
};

export default Step10Signature;

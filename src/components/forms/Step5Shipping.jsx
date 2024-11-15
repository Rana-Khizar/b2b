<<<<<<< Updated upstream
import React, { useState } from "react";
import "./Step5Shipping.css";
import Layout from "../../Layout/Layout";

const Step5Shipping = ({ onNext, onPrevious }) => {
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingDestinations, setShippingDestinations] = useState([]);
  const [returnPolicy, setReturnPolicy] = useState("");
  const [inventoryManagement, setInventoryManagement] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const handleShippingMethodChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const handleShippingDestinationChange = (event) => {
    const destination = event.target.value;
    if (event.target.checked) {
      setShippingDestinations([...shippingDestinations, destination]);
    } else {
      setShippingDestinations(
        shippingDestinations.filter((d) => d !== destination)
      );
    }
  };

  const handleReturnPolicyChange = (event) => {
    setReturnPolicy(event.target.value);
  };

  const handleInventoryManagementChange = (event) => {
    setInventoryManagement(event.target.value);
  };

  const handleAdditionalCommentsChange = (event) => {
    setAdditionalComments(event.target.value);
  };

  return (
  <Layout>    
=======
import React from "react";
import "./Step5Shipping.css";

const Step5Shipping = ({ onNext, onPrevious }) => {
  return (
>>>>>>> Stashed changes
    <div className="form-step">
      <h2>Shipping and Logistics</h2>
      <form>
        <div className="form-group">
          <label htmlFor="shippingMethod">Preferred Shipping Method:</label>
<<<<<<< Updated upstream
          <select
            id="shippingMethod"
            value={shippingMethod}
            onChange={handleShippingMethodChange}
          >
            <option value="" disabled>
=======
          <select id="shippingMethod">
            <option value="" disabled selected>
>>>>>>> Stashed changes
              Select a shipping method
            </option>
            <option value="selfShipping">Self-shipping</option>
            <option value="fulfilledByDeKoshur">Fulfilled by De Koshur Crafts</option>
            <option value="thirdParty">
              3rd Party Fulfillment Service (please specify in comments)
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="shippingDestinations">
            Shipping Destinations (Select all that apply):
          </label>
          <div className="checkbox-group">
            <label>
<<<<<<< Updated upstream
              <input
                type="checkbox"
                value="United States"
                checked={shippingDestinations.includes("United States")}
                onChange={handleShippingDestinationChange}
              />
              United States
            </label>
            <label>
              <input
                type="checkbox"
                value="Canada"
                checked={shippingDestinations.includes("Canada")}
                onChange={handleShippingDestinationChange}
              />
              Canada
            </label>
            <label>
              <input
                type="checkbox"
                value="Europe"
                checked={shippingDestinations.includes("Europe")}
                onChange={handleShippingDestinationChange}
              />
              Europe
            </label>
            <label>
              <input
                type="checkbox"
                value="Other"
                checked={shippingDestinations.includes("Other")}
                onChange={handleShippingDestinationChange}
              />
              Other (please specify in comments)
=======
              <input type="checkbox" value="United States" /> United States
            </label>
            <label>
              <input type="checkbox" value="Canada" /> Canada
            </label>
            <label>
              <input type="checkbox" value="Europe" /> Europe
            </label>
            <label>
              <input type="checkbox" value="Asia" /> Asia
            </label>
            <label>
              <input type="checkbox" value="Other" /> Other (please specify in comments)
>>>>>>> Stashed changes
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="returnPolicy">Return Policy:</label>
          <textarea
            id="returnPolicy"
            rows="4"
            placeholder="Briefly describe your return and exchange policies."
<<<<<<< Updated upstream
            value={returnPolicy}
            onChange={handleReturnPolicyChange}
=======
>>>>>>> Stashed changes
          />
        </div>

        <div className="form-group">
          <label htmlFor="inventoryManagement">Inventory Management Capability:</label>
          <div className="radio-group">
            <label>
<<<<<<< Updated upstream
              <input
                type="radio"
                name="inventoryManagement"
                value="manual"
                checked={inventoryManagement === "manual"}
                onChange={handleInventoryManagementChange}
              />
              Manual
            </label>
            <label>
              <input
                type="radio"
                name="inventoryManagement"
                value="softwareBased"
                checked={inventoryManagement === "softwareBased"}
                onChange={handleInventoryManagementChange}
              />
              Software-Based
=======
              <input type="radio" name="inventoryManagement" value="manual" /> Manual
            </label>
            <label>
              <input type="radio" name="inventoryManagement" value="softwareBased" /> Software-Based
>>>>>>> Stashed changes
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalComments">Additional Comments:</label>
          <textarea
            id="additionalComments"
            rows="4"
            placeholder="Provide any additional details regarding shipping or logistics."
<<<<<<< Updated upstream
            value={additionalComments}
            onChange={handleAdditionalCommentsChange}
=======
>>>>>>> Stashed changes
          />
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
<<<<<<< Updated upstream
    </Layout>

  );
};

export default Step5Shipping;
=======
  );
};

export default Step5Shipping;
>>>>>>> Stashed changes

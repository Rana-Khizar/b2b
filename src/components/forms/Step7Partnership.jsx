import React from "react";
import "./Step7Partnership.css";
<<<<<<< Updated upstream
import Layout from "../../Layout/Layout";

const Step7Partnership = ({ onNext, onPrevious }) => {
  return (
    <Layout>
=======

const Step7Partnership = ({ onNext, onPrevious }) => {
  return (
>>>>>>> Stashed changes
    <div className="form-step">
      <h2>Partnership Goals and Support Needs</h2>
      <form>
        <div className="form-group">
          <label>Primary Goals for E-Commerce Partnership:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="sales" /> Increase Sales
            </label>
            <label>
              <input type="checkbox" value="brandReach" /> Expand Brand Reach
            </label>
            <label>
              <input type="checkbox" value="newMarkets" /> Access New Markets
            </label>
            <label>
              <input type="checkbox" value="logistics" /> Improve Logistics and Fulfillment
            </label>
            <label>
              <input type="checkbox" value="marketingSupport" /> Access Marketing Support
            </label>
            <label>
              <input type="checkbox" value="other" /> Other (please specify):
              <input
                type="text"
                className="other-input"
                placeholder="Specify your goal"
              />
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Type of Support Needed from De Koshur Crafts:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="paymentGateway" /> Payment Gateway
            </label>
            <label>
              <input type="checkbox" value="shippingFulfillment" /> Shipping and Fulfillment
            </label>
            <label>
              <input type="checkbox" value="marketingPromotion" /> Marketing and Promotion
            </label>
            <label>
              <input type="checkbox" value="inventoryManagement" /> Inventory Management
            </label>
            <label>
              <input type="checkbox" value="customerService" /> Customer Service Support
            </label>
            <label>
              <input type="checkbox" value="productPhotography" /> Product Photography
            </label>
            <label>
<<<<<<< Updated upstream
              <input type="checkbox" value="" /> Other (please specify):
=======
              <input type="checkbox" value="other" /> Other (please specify):
>>>>>>> Stashed changes
              <input
                type="text"
                className="other-input"
                placeholder="Specify the support"
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
<<<<<<< Updated upstream
    </Layout>  
=======
>>>>>>> Stashed changes
  );
};

export default Step7Partnership;

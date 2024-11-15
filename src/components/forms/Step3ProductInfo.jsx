import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import "./Step3ProductInfo.css";

const Step3ProductInfo = ({ onNext, onPrevious }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [selectedPackagingStandards, setSelectedPackagingStandards] = useState(
    []
  );

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const handlePackagingStandardsChange = (standard) => {
    if (selectedPackagingStandards.includes(standard)) {
      setSelectedPackagingStandards(
        selectedPackagingStandards.filter((s) => s !== standard)
      );
    } else {
      setSelectedPackagingStandards([...selectedPackagingStandards, standard]);
    }
  };

  return (
  <Layout>
    <div className="form-step">
      <h2>Product Information</h2>
      <form>
      <div className="form-group">
  <label>Product Categories:</label>
  <div className="checkbox-group">
    <div className="category">
      <span className="category-title">Boutique</span>
      <div className="category-details">
        <label>
          <input type="checkbox" /> Pashmina
        </label>
        <label>
          <input type="checkbox" /> Kani Craft
        </label>
        <label>
          <input type="checkbox" /> Cashmere
        </label>
        <label>
          <input type="checkbox" /> Silk
        </label>
        <label>
          <input type="checkbox" /> Bags and Purses
        </label>
        <label>
          <input type="checkbox" /> Jackets
        </label>
        <label>
          <input type="checkbox" /> Kaftans
        </label>
        <label>
          <input type="checkbox" /> Kurtas
        </label>
        <label>
          <input type="checkbox" /> Pherans
        </label>
        <label>
          <input type="checkbox" /> Jewelry
        </label>
      </div>
    </div>
    <div className="category">
      <span className="category-title">Interior Decor</span>
      <div className="category-details">
        <label>
          <input type="checkbox" /> Papier-Mâché
        </label>
        <label>
          <input type="checkbox" /> Bed Linens
        </label>
        <label>
          <input type="checkbox" /> Sofa and Cushion Covers
        </label>
        <label>
          <input type="checkbox" /> Room Divider Screens
        </label>
        <label>
          <input type="checkbox" /> Office Accessories
        </label>
        <label>
          <input type="checkbox" /> Jeweled Wall Hangings
        </label>
        <label>
          <input type="checkbox" /> Tapestry
        </label>
      </div>
    </div>
    {/* Add more categories as needed */}
  </div>
</div>


        <div className="form-group">
          <label>Are your products handmade?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="handmade" /> Yes
            </label>
            <label>
              <input type="radio" name="handmade" /> Partially handmade
            </label>
            <label>
              <input type="radio" name="handmade" /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Product Packaging Standards:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={selectedPackagingStandards.includes("standard")}
                onChange={() => handlePackagingStandardsChange("standard")}
              />
              Standard Packaging
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedPackagingStandards.includes("eco-friendly")}
                onChange={() => handlePackagingStandardsChange("eco-friendly")}
              />
              Eco-Friendly Packaging
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedPackagingStandards.includes("recycled")}
                onChange={() => handlePackagingStandardsChange("recycled")}
              />
              Recycled Materials
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedPackagingStandards.includes("premium")}
                onChange={() => handlePackagingStandardsChange("premium")}
              />
              Premium Packaging
            </label>
            <div className="other-input-wrapper">
              <label className="other-label">
                <input
                  type="checkbox"
                  checked={selectedPackagingStandards.includes("other")}
                  onChange={() => handlePackagingStandardsChange("other")}
                />
                Other:
              </label>
              <input
                type="text"
                placeholder="Specify packaging standards"
                className="other-input"
                disabled={!selectedPackagingStandards.includes("other")}
              />
            </div>
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

export default Step3ProductInfo;

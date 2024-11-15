
import "./Step2BusinessDetails.css";
import Layout from "../../Layout/Layout";

const Step2BusinessDetails = ({ onNext, onPrevious }) => {
  
  return (
    <Layout>
    <div className="form-step">
      <h2>Business Details</h2>
      <form>
        {/* Years in Operation */}
        <div className="form-group">
          <label htmlFor="yearsInOperation">Years in Operation:</label>
          <input type="number" id="yearsInOperation" placeholder="Enter years in operation" />
        </div>

        {/* Type of Business (Dropdown with Multi-Select) */}
        <div className="form-group">
          <label htmlFor="businessType">Type of Business:</label>
          <select className="business-dropdown">
            <option value=""> Business Type</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Distributor">Distributor</option>
            <option value="Artisan Collective">Artisan Collective</option>
            <option value="Independent Artisan">Independent Artisan</option>
            <option value="Other">Other</option>
            </select>
        </div>

        {/* Business Structure Dropdown */}
        <div className="form-group">
          <label htmlFor="businessStructure">Business Structure:</label>
          <select className="business-dropdown">
            <option value="">Select Business Structure</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Partnership">Partnership</option>
            <option value="Corporation">Corporation</option>
            <option value="LLC">LLC</option>
            <option value="Cooperative">Cooperative</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Annual Revenue Range Dropdown */}
        <div className="form-group">
          <label htmlFor="annualRevenue">Annual Revenue Range:</label>
          <select className="business-dropdown">
          <option value="" disabled>Select revenue range</option>
                <option value="lessThan50000">Less than ₹50,000</option>
                <option value="50000To100000">₹50,000 - ₹100,000</option>
                <option value="100000To500000">₹100,000 - ₹500,000</option>
                <option value="500000To1Million">₹500,000 - ₹1 million</option>
                <option value="over1Million">Over ₹1 million</option>
          </select>
        </div>

        {/* Navigation Buttons */}
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

export default Step2BusinessDetails;

import React from "react";
<<<<<<< Updated upstream
import Layout from "../../Layout/Layout";
=======
>>>>>>> Stashed changes
import "./Step6Marketing.css";

const Step6Marketing = ({ onNext, onPrevious }) => {
  return (
<<<<<<< Updated upstream
    <Layout>
      <div className="form-step">
        <h2>Digital Marketing and Brand Information</h2>
        <form>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="facebookUrl">Facebook URL:</label>
              <input type="url" id="facebookUrl" placeholder="Enter your Facebook URL" />
            </div>

            <div className="form-group">
              <label htmlFor="instagramUrl">Instagram URL:</label>
              <input type="url" id="instagramUrl" placeholder="Enter your Instagram URL" />
            </div>

            <div className="form-group">
              <label htmlFor="twitterUrl">Twitter URL:</label>
              <input type="url" id="twitterUrl" placeholder="Enter your Twitter URL" />
            </div>

            <div className="form-group">
              <label htmlFor="linkedinUrl">LinkedIn URL:</label>
              <input type="url" id="linkedinUrl" placeholder="Enter your LinkedIn URL" />
            </div>

            <div className="form-group">
              <label htmlFor="otherUrl">Other Platform URL:</label>
              <input type="url" id="otherUrl" placeholder="Enter another platform URL" />
            </div>
            <div className="form-group">
              <label htmlFor="brandStory">Brand Story:</label>
              <textarea
                id="brandStory"
                rows="5"
                placeholder="Describe the story behind your brand (50-150 words)."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Marketing Materials Available:</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" value="photos" /> High-Quality Product Photos
                </label>
                <label>
                  <input type="checkbox" value="descriptions" /> Product Descriptions
                </label>
                <label>
                  <input type="checkbox" value="videos" /> Videos
                </label>
                <label>
                  <input type="checkbox" value="logos" /> Brand Logo and Collateral
                </label>
                <label>
                  <input type="checkbox" value="catalogs" /> Catalogs/Lookbooks
                </label>
                <label>
                  <input type="checkbox" value="other" /> Other (please specify)
                  <textarea
                    id="otherMaterials"
                    rows="2"
                    placeholder="Please specify"
                  ></textarea>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="marketingAssistance">Do you need assistance with digital marketing?</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="marketingAssistance" value="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="marketingAssistance" value="no" /> No
                </label>
                <label>
                  <input type="radio" name="marketingAssistance" value="discussion" /> Open to Discussion
                </label>
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

export default Step6Marketing;
=======
    <div className="form-step">
      <h2>Digital Marketing and Brand Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="facebookUrl">Facebook URL:</label>
          <input type="url" id="facebookUrl" placeholder="Enter your Facebook URL" />
        </div>

        <div className="form-group">
          <label htmlFor="instagramUrl">Instagram URL:</label>
          <input type="url" id="instagramUrl" placeholder="Enter your Instagram URL" />
        </div>

        <div className="form-group">
          <label htmlFor="twitterUrl">Twitter URL:</label>
          <input type="url" id="twitterUrl" placeholder="Enter your Twitter URL" />
        </div>

        <div className="form-group">
          <label htmlFor="linkedinUrl">LinkedIn URL:</label>
          <input type="url" id="linkedinUrl" placeholder="Enter your LinkedIn URL" />
        </div>

        <div className="form-group">
          <label htmlFor="otherUrl">Other Platform URL:</label>
          <input type="url" id="otherUrl" placeholder="Enter another platform URL" />
        </div>

        <div className="form-group">
          <label htmlFor="brandStory">Brand Story:</label>
          <textarea
            id="brandStory"
            rows="5"
            placeholder="Describe the story behind your brand (50-150 words)."
          ></textarea>
        </div>

        <div className="form-group">
          <label>Marketing Materials Available:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="photos" /> High-Quality Product Photos
            </label>
            <label>
              <input type="checkbox" value="descriptions" /> Product Descriptions
            </label>
            <label>
              <input type="checkbox" value="videos" /> Videos
            </label>
            <label>
              <input type="checkbox" value="logos" /> Brand Logo and Collateral
            </label>
            <label>
              <input type="checkbox" value="catalogs" /> Catalogs/Lookbooks
            </label>
            <label>
              <input type="checkbox" value="other" /> Other (please specify)
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="marketingAssistance">Do you need assistance with digital marketing?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="marketingAssistance" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="marketingAssistance" value="no" /> No
            </label>
            <label>
              <input type="radio" name="marketingAssistance" value="discussion" /> Open to Discussion
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
  );
};

export default Step6Marketing;
>>>>>>> Stashed changes

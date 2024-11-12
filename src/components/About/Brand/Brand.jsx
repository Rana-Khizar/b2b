import React, { useState } from 'react';
import Layout from '../../../Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandOrigin from './BrandOrigin/BrandOrigin';
import CommonConnection from './CommonConnection/CommonConnection';
import BrandTransformation from './BrandTransformation/BrandTransformation';
import ProgressiveGrowth from './ProgressiveGrowth/ProgressiveGrowth';


const content = {
  'brand-origin': { title: 'Brand Origin', component: <BrandOrigin   /> },
  'common-connection': { title: 'Common Connection', component: <CommonConnection /> },
  // 'defining-moments': { title: 'Defining Moments', component: <Defining /> },
  'brand-transformation': { title: 'Brand Transformation', component: <BrandTransformation /> },
  'progressive-growth': { title: 'Progressive Growth', component: <ProgressiveGrowth /> },
};

const Brand = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(content)[0]);

  return (
    <Layout>
    {/* Navigation Bar */}
    {/* <nav className="d-flex flex-wrap justify-content-center align-items-center my-3">
      {Object.entries(content).map(([key, value]) => (
        <div
          key={key}
          className={`nav-item p-3 m-2 text-center rounded ${
            activeTab === key
              ? 'bg-orange text-white shadow-lg'
              : 'bg-light text-orange border border-secondary hover-shadow'
          }`}
          style={{
            cursor: 'pointer',
            flex: '1 0 150px',
            maxWidth: '300px',
            transition: 'all 0.3s ease',
          }}
          onClick={() => setActiveTab(key)}
        >
          <h2 className="font-weight-bold h6 mb-0">{value.title}</h2>
        </div>
      ))}
    </nav> */}

    {/* Content Display */}
    <div className="content-section">
      {content[activeTab].component}
    </div>
  </Layout>
  );
};

export default Brand;

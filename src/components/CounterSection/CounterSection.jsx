import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import counterImage from "../../assets/counter-bg.png";

const CounterSection = () => {
 
  const [currentVendors, setCurrentVendors] = useState(112);
  const [previousVendors, setPreviousVendors] = useState(100);

 
  const calculateGrowth = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
     
      const newCurrentVendors = currentVendors + Math.floor(Math.random() * 10); 
      setPreviousVendors(currentVendors); 
      setCurrentVendors(newCurrentVendors);
    }, 24 * 60 * 60 * 1000); 

    return () => clearInterval(interval); 
  }, [currentVendors]);

  const vendorGrowth = calculateGrowth(currentVendors, previousVendors);

  const counters = [
    { id: 2, count: currentVendors, suffix: '', title: 'Registered Vendors' },
    { id: 3, count: 82, suffix: '', title: 'Active Vendors' },
    { id: 1, count: vendorGrowth.toFixed(2), suffix: '%', title: 'Vendor Growth' }, // Use the calculated growth
    { id: 4, count: 5, suffix: 'k+', title: 'Product Listing' },
  ];

  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item text-center">
          {counters.map((counter) => (
            <div className="col-lg-3 col-md-6 col-sm-6 mb-3" key={counter.id}>
              <div className="counter-single-box">
                <div className="counter-content">
                  <h4 className="counter">
                    <CountUp end={counter.count} duration={2.5} />{counter.suffix}
                  </h4>
                  <p>{counter.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="counter-thumb d-none d-md-block"> {/* Hide on small screens */}
          <img src={counterImage} alt="thumb" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default CounterSection;

import React, { useState } from 'react';
import Header from '../Homepage/Header';
import Footer from '../Homepage/Footer';


const Ecommerce = () => {
    // State to track which form step is currently active
    const [currentStep, setCurrentStep] = useState(1);

    // Function to go to the next step
    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    // Function to go to the previous step
    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <>
            <Header />
            <div className="container my-32">
                <h2 className="mb-4">Business Information Form</h2>

                {/* Conditionally render forms based on the current step */}
                {/* {currentStep === 1 && <Form1 />}
                {currentStep === 2 && <Form2 />}
                {currentStep === 3 && <Form3 />} */}

                {/* Navigation buttons */}
                <div className="d-flex justify-content-between mt-4">
                    {/* Show 'Previous' button only after the first step */}
                    {currentStep > 1 && (
                        <button className="btn btn-secondary mt-4 mb-4" onClick={prevStep}>
                            Previous
                        </button>
                    )}

                    {/* Show 'Next' button until the last step */}
                    {currentStep < 3 && (
                        <button  className="btn btn-color text-white mt-4 mb-4" onClick={nextStep}>
                            Next
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Ecommerce;

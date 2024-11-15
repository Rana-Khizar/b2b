import React, { useState } from "react";
import Step1VendorInfo from "./Step1VendorInfo";
import Step2BusinessDetails from "./Step2BusinessDetails";
import Step3ProductInfo from "./Step3ProductInfo";
import Step4Compliance from "./Step4Compliance";
import Step5Shipping from "./Step5Shipping";
import Step6Marketing from "./Step6Marketing";
import Step7Partnership from "./Step7Partnership";
import Step8DocumentUpload from "./Step8DocumentUpload";
import Step9Acknowledgement from "./Step9Acknowledgement";
import Step10Signature from "./Step10Signature";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const updateFormData = (stepData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...stepData,
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1VendorInfo onNext={handleNext} updateFormData={updateFormData} />;
      case 2:
<<<<<<< Updated upstream
        return <Step2BusinessDetails onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
=======
         return <Step2BusinessDetails onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
>>>>>>> Stashed changes
      case 3:
        return <Step3ProductInfo onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 4:
        return <Step4Compliance onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 5:
        return <Step5Shipping onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 6:
        return <Step6Marketing onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 7:
        return <Step7Partnership onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 8:
        return <Step8DocumentUpload onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 9:
        return <Step9Acknowledgement onNext={handleNext} onPrevious={handlePrevious} updateFormData={updateFormData} />;
      case 10:
        return <Step10Signature onPrevious={handlePrevious} formData={formData} />;
<<<<<<< Updated upstream
      default:
        return null;
=======
       default:
         return null;
>>>>>>> Stashed changes
    }
  };

  return (
    <div className="multi-step-form">
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;

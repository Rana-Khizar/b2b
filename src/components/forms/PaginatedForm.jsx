import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
// Import other form components as needed

const PaginatedForm = () => {
  const [step, setStep] = useState(1); // Tracks the current step/form
  const [formData, setFormData] = useState({
    // Initialize form data here
    taxId: '',
    name: '',
    // Add other fields as needed for Form1, Form2, etc.
  });

  const handleNext = () => setStep(step + 1); // Go to next form
  const handleBack = () => setStep(step - 1); // Go to previous form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Form1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <Form2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <Form3
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      // Add more cases for additional forms (Form4, Form5, etc.)
      default:
        return <div>Form not found</div>;
    }
  };

  return (
    <div>
      {renderForm()}
      {/* You can add a progress indicator here, if desired */}
    </div>
  );
};

export default PaginatedForm;

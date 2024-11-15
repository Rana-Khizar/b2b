// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './formStyles.css';

const Form3 = ({ formData, handleChange, handleNext, handlePrevious }) => (

    <div className="form-container">
    <h2>Form 3: Additional Details</h2>
    <Form>
      <Form.Group controlId="businessType">
        <Form.Label>Type of Business</Form.Label>
        <Form.Control
          type="text"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="numberOfEmployees">
        <Form.Label>Number of Employees</Form.Label>
        <Form.Control
          type="number"
          name="numberOfEmployees"
          value={formData.numberOfEmployees}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="annualRevenue">
        <Form.Label>Annual Revenue</Form.Label>
        <Form.Control
          type="text"
          name="annualRevenue"
          value={formData.annualRevenue}
          onChange={handleChange}
        />
      </Form.Group>

      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Form>
  </div>
);

export default Form3;

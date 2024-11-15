import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './formStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form1 = ({ formData, handleChange, handleNext }) => (
    <div className="form-container">
    <h2>Form 1: Basic Information</h2>
    <Form>
      <Form.Group controlId="taxId">
        <Form.Label>Tax Identification Number</Form.Label>
        <Form.Control
          type="text"
          name="taxId"
          value={formData.taxId}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="companyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="zipCode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </Form.Group>

      <Button onClick={handleNext}>Next</Button>
    </Form>
  </div>
);

export default Form1;

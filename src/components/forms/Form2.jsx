// src/forms/Form2.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './formStyles.css';

const Form2 = ({ formData, handleChange, handleNext, handlePrevious }) => (
    <div className="form-container">
    <h2>Form 2: Contact Information</h2>
    <Form>
      <Form.Group controlId="contactFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="contactFirstName"
          value={formData.contactFirstName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="contactLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="contactLastName"
          value={formData.contactLastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="contactPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="contactEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
        />
      </Form.Group>

      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Form>
  </div>
);

export default Form2;

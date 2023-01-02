import React from "react";
import Form from "react-bootstrap/Form";

const SingleInput = (props) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{props.title}:</Form.Label>
    <Form.Control
      className="form-input"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
  </Form.Group>
);


export default SingleInput;

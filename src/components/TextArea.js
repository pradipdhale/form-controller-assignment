import React from 'react';
import Form from "react-bootstrap/Form";
const TextArea = (props) => (
	<Form.Group className="mb-3">
		<Form.Label>{props.title}:</Form.Label>
		<Form.Control as="textarea"
			className="form-input"
			style={props.resize ? null : {resize: 'none'}}
			name={props.name}
			rows={props.rows}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</Form.Group>
);


export default TextArea;
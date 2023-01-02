import React from 'react';
import Form from "react-bootstrap/Form";

const Select = (props) => (
	<div className="form-group">
		<Form.Label>Select Username:</Form.Label>
		<select
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
	</div>
);


export default Select;
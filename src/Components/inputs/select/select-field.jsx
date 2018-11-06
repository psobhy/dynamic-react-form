import React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";

const SelectField = props => {
  return (
    <FormGroup id={props.field.key} bsSize="large">
      <h4>
        <ControlLabel>{props.field.label}</ControlLabel>
      </h4>
      <select defaultValue="default" className="form-control">
        <option disabled value="default">
          {props.field.placeholder}
        </option>
        {props.field.options.map((option, i) => (
          <option key={i} value={i}>
            {option}
          </option>
        ))}
      </select>
    </FormGroup>
  );
};

export default SelectField;

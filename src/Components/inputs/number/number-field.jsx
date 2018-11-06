import React from "react";
import { ControlLabel, FormGroup, FormControl } from "react-bootstrap";
const NumberField = props => {
  return (
    <FormGroup bsSize="large" id={props.field.key}>
      <h4>
        <ControlLabel>{props.field.label}</ControlLabel>
      </h4>
      <FormControl type="number" required={props.field.required} min="1" />
    </FormGroup>
  );
};

export default NumberField;

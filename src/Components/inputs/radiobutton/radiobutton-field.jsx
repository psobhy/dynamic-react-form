import React from "react";
import { Radio, FormGroup, ControlLabel } from "react-bootstrap";
const RadioButtonField = props => {
  return (
    <FormGroup id={props.field.key} bsSize="large">
      <h4>
        <ControlLabel>{props.field.label}</ControlLabel>
      </h4>
      {props.field.options.map((option, i) => (
        <Radio className="form-control" name="radioGroup" key={i}>
          {option}
        </Radio>
      ))}
    </FormGroup>
  );
};

export default RadioButtonField;

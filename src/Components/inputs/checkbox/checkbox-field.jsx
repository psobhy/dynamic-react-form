import React from "react";
import "./checkbox-field.css";

import { Checkbox, FormGroup } from "react-bootstrap";
const CheckboxField = props => {
  return (
    <FormGroup id={props.field.key} bsSize="lg">
      {props.field.options.map((option, i) => (
        <Checkbox key={i} inline className="_checkbox">
          {option}
        </Checkbox>
      ))}
    </FormGroup>
  );
};

export default CheckboxField;

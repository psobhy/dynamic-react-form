import React, { Component } from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import { DateTime } from "react-datetime-bootstrap";
import "./date-field.css";

class DatePickerField extends Component {
  state = {
    value: new Date().toISOString()
  };

  setDatePickerProps() {
    return {
      format: "LL"
    };
  }
  render() {
    const { field } = this.props;
    const { value } = this.state;
    return (
      <FormGroup bsSize="large">
        <ControlLabel>{field.placeholder}</ControlLabel>
        <DateTime
          pickerOptions={this.setDatePickerProps()}
          value={value}
          className="datepicker"
        />
      </FormGroup>
    );
  }
}

export default DatePickerField;

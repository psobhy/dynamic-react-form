import React, { Component } from "react";
import { ControlLabel, FormGroup, FormControl } from "react-bootstrap";

class TextField extends Component {
  state = {
    value: ""
  };

  getValidationState() {
    const length = this.state.value.length;
    if (this.props.field.key === "email") return null;
    if (length < 3 && length > 0) return "error";
    else if (length <= this.props.field.maxlength && length >= 3)
      return "success";
    return null;
  }

  checkEmail() {
    if (this.props.field.key === "email") {
      return "email";
    } else {
      return "text";
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const { field } = this.props;
    const { value } = this.state;
    return (
      <FormGroup
        id={field.key}
        bsSize="lg"
        validationState={this.getValidationState()}
      >
        <h4>
          <ControlLabel>{field.label}</ControlLabel>
        </h4>
        <FormControl
          type={this.checkEmail()}
          placeholder={field.placeholder}
          required={field.required}
          maxLength={field.maxlength}
          value={value}
          onChange={event => this.handleChange(event)}
        />
      </FormGroup>
    );
  }
}

export default TextField;

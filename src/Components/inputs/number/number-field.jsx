import React, { Component } from "react";
import {
  ControlLabel,
  FormGroup,
  FormControl,
  InputGroup
} from "react-bootstrap";

class NumberField extends Component {
  state = {
    min: "",
    max: "",
    unit: ""
  };

  componentDidMount() {
    if (this.props.field.min) {
      this.setState({ min: this.props.field.min });
    }
    if (this.props.field.max) {
      this.setState({ max: this.props.field.max });
    }
  }

  addUnitAttribute() {
    if (this.props.field.unit) {
      return (
        <InputGroup>
          <InputGroup.Addon>{this.props.field.unit}</InputGroup.Addon>
          <FormControl
            type="number"
            required={this.props.field.required}
            min={this.state.min}
            max={this.state.max}
            placeholder={this.props.field.placeholder}
          />
        </InputGroup>
      );
    }
    return (
      <FormControl
        type="number"
        required={this.props.field.required}
        min={this.state.min}
        max={this.state.max}
        placeholder={this.props.field.placeholder}
      />
    );
  }
  render() {
    const { field } = this.props;
    return (
      <FormGroup bsSize="large" id={field.key}>
        <h4>
          <ControlLabel>{field.label}</ControlLabel>
        </h4>
        {this.addUnitAttribute()}
      </FormGroup>
    );
  }
}

export default NumberField;

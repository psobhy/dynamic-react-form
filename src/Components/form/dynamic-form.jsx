import React, { Component } from "react";
import TextField from "../inputs/text/text-field";
import SelectField from "../inputs/select/select-field";
import FormService from "../../Services/form-service";
import RadioButtonField from "../inputs/radiobutton/radiobutton-field";
import CheckboxField from "../inputs/checkbox/checkbox-field";
import DatePickerField from "../inputs/datepicker/date-field";
import { Form } from "react-bootstrap";
import NumberField from "../inputs/number/number-field";
class DynamicForm extends Component {
  state = {
    FormModel: []
  };

  componentDidMount() {
    let formService = new FormService();

    formService.getFormFields().then(res => {
      this.setState({
        FormModel: res
      });
    });
  }

  render() {
    const { FormModel } = this.state;
    return (
      <Form horizontal className="offset-3 col-6 offset-3">
        {FormModel.map(field => renderFormFields(field))}

        <button type="submit">click</button>
      </Form>
    );
  }
}

const renderFormFields = field => {
  if (field.type === "text") {
    return <TextField field={field} key={field.key} />;
  } else if (field.type === "select") {
    return <SelectField field={field} key={field.key} />;
  } else if (field.type === "radiobutton") {
    return <RadioButtonField field={field} key={field.key} />;
  } else if (field.type === "checkbox") {
    return <CheckboxField field={field} key={field.key} />;
  } else if (field.type === "date") {
    return <DatePickerField field={field} key={field.key} />;
  } else if (field.type === "number") {
    return <NumberField field={field} key={field.key} />;
  }
};
export default DynamicForm;

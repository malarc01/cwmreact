import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    console.log("validate () invoked");
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    // maps array into a Object try with map and reduce methods
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    // console.log('OUTPUT =>: validate -> result', result);

    // const errors = {};

    // const { data } = this.state;

    // if (data.username.trim() === '') errors.username = 'Username is required.';
    // if (data.password.trim() === '') errors.password = 'Password is required.';
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    console.log("obj => ", obj);
    // console.log("schema 1st => ", schema);
    const schema = { [name]: this.schema[name] };
    console.log("schema => ", schema);

    const { error } = Joi.validate(obj, schema);
    console.log("error => ", error);
    return error ? error.details[0].message : null;

    // if (name === 'username') {
    // 	if (value.trim() === '') return 'Username is required';
    // 	// ... other rules
    // }
    // if (name === 'username') {
    // 	if (value.trim() === '') return 'Password is required';
    // }
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    // const username = this.username.current.value;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    console.log("INPUT IS =>", input);

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
    console.log("update");
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    console.log("renderInput(NAME, LABEL, TYPE) =>", name, label, type);

    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;

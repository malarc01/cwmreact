import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends Component {
	// username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	state = {
		account: { username: '', password: '' },
		errors: {}
	};

	// errors['username']

	// errors.find(e=>e.name==='username')

	// intialize forms to empty string CAN NOT use null or undefined
	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.account, this.schema, options);

		if (!error) return null;

		const errors = {};
		// maps array into a Object try with map and reduce methods
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;

		// console.log('OUTPUT =>: validate -> result', result);

		// const errors = {};

		// const { account } = this.state;

		// if (account.username.trim() === '') errors.username = 'Username is required.';
		// if (account.password.trim() === '') errors.password = 'Password is required.';
		// return Object.keys(errors).length === 0 ? null : errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };

		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;

		// if (name === 'username') {
		// 	if (value.trim() === '') return 'Username is required';
		// 	// ... other rules
		// }
		// if (name === 'username') {
		// 	if (value.trim() === '') return 'Password is required';
		// }
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const errors = this.validate();
		// console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		// Call the server
		// const username = this.username.current.value;

		console.log('Submitted');
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		console.log('INPUT IS =>', input);
		const account = { ...this.state.account };
		account[input.name] = input.value;

		this.setState({ account, errors });
		console.log('update');
	};

	render() {
		const { account, errors } = this.state;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input
						name='username'
						value={account.username}
						label='Username'
						onChange={this.handleChange}
						error={errors.username}
					/>
					<Input
						name='password'
						value={account.password}
						label='Password'
						onChange={this.handleChange}
						error={errors.password}
					/>
					{/* <div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							value={account.password}
							onChange={this.handleChange}
							name='password'
							id='password'
							type='text'
							className='form-control'
						/>
					</div> */}

					<button disabled={this.validate()} className='btn btn-primary'>
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;

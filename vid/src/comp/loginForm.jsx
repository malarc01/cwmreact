import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
	// username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	state = {
		account: { username: '', password: '' },
		errors: {
			username: 'Username is required.'
		}
	};

	// errors['username']

	// errors.find(e=>e.name==='username')

	// intialize forms to empty string CAN NOT use null or undefined

	validate = () => {
		const errors = {};

		const { account } = this.state;

		if (account.username.trim() === '') errors.username = 'Username is required.';
		if (account.password.trim() === '') errors.password = 'Password is required.';
		return Object.keys(errors).length === 0 ? null : errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const errors = this.validate();
		console.log(errors);
		this.setState({ errors });
		if (errors) return;

		// Call the server
		// const username = this.username.current.value;

		console.log('Submitted');
	};

	handleChange = ({ currentTarget: input }) => {
		console.log('ZUM', input);
		const account = { ...this.state.account };
		account[input.name] = input.value;
		console.log();
		this.setState({ account });
		console.log('update');
	};

	render() {
		const { account } = this.state;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input name='username' value={account.username} label='Username' onChange={this.handleChange} />
					<Input name='password' value={account.password} label='Password' onChange={this.handleChange} />
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

					<button className='btn btn-primary'>Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;

import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
	// username = React.createRef();

	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	// errors['username']

	// errors.find(e=>e.name==='username')

	// intialize forms to empty string CAN NOT use null or undefined
	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	doSubmit = () => {
		// call the server
		console.log('Submitted');
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'password', 'password')}
					{this.renderButton('Login')}
					{/* <div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							value={data.password}
							onChange={this.handleChange}
							name='password'
							id='password'
							type='text'
							className='form-control'
						/>
					</div> */}
				</form>
			</div>
		);
	}
}

export default LoginForm;

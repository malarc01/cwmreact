import React, { Component } from 'react';

import Form from './common/form';
import { Joi } from 'joi-browser';

class MovieForm extends Form {
	state = {
		data: { title: '', genre: '', numberInStock: '', rate: '' },
		errors: {}
	};

	// schema = {
	// 	username: Joi.string().required().email().label('Username'),
	// 	password: Joi.string().required().min(5).label('Password'),
	// 	name: Joi.string().required().label('SG')
	// };

	render() {
		return (
			<div>
				{/* <h1>MovieForm {match.params.id} </h1> */}
				<h1>MovieForm </h1>

				<form>
					<div className='form-group'>
						<label htmlFor='exampleFormControlInput1'>Title</label>
						<input
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='add title'
						/>
					</div>
					{/* <div className='form-group'>
					<label htmlFor='exampleFormControlInput2'>Genre</label>
					<input type='text' className='form-control' id='formGroupExampleInput' placeholder='add genre' />
				</div> */}
					<div className='form-group'>
						<label htmlFor='exampleFormControlSelect1'>Genre</label>
						<select className='form-control' id='exampleFormControlSelect1'>
							<option value='' />
							<option value='action'>Action</option>
							<option value='comedy'>Comedy</option>
							<option value='thriller'>Thriller</option>
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='exampleFormControlInput1'>Number in Stock </label>
						<input type='email' className='form-control' id='exampleFormControlInput1' placeholder='' />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleFormControlInput1'>Rate 0-10 </label>
						<input
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='add rate'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='formControlRange'>Rate </label>
						<input type='range' className='form-control-range' id='formControlRange' />
					</div>

					<label htmlFor='customRange2'>Example range</label>
					<input type='range' className='custom-range' min='0' max='5' id='customRange2' />
				</form>

				{/* <button classNameName='btn btn-primary' onClick={() => history.push('/movies')}>
					Save
				</button> */}
				<button className='btn btn-primary' onClick={() => console.log('Called Server')}>
					Save
				</button>
				{/* {this.renderButton('Save Movie')} */}
			</div>
		);
	}
}

// export default MovieForm;

// const MovieForm = ({ match, history }) => {
// 	return (

// 	);
// };

export default MovieForm;

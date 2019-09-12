import React from 'react';

const AddMovie = ({ match, history }) => {
	return (
		<div>
			{/* <h1>AddMovie {match.params.id} </h1> */}
			<h1>AddMovie </h1>

			<form>
				<div className='form-group' />
			</form>
			<button className='btn btn-primary' onClick={() => history.push('/movies')}>
				Save
			</button>
		</div>
	);
};

export default AddMovie;

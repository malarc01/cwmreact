import React from 'react';

// {}...rest} selects the REST of the PROPS in this case!
const Select = ({ name, label, options, error, ...rest }) => {
	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>

			<select {...rest} name={name} id={name} className='form-control'>
				<option value='' />
				{options.map((option) => (
					<option key={option._id} value={option._id}>
						{option.name}
					</option>
				))}
			</select>

			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Select;

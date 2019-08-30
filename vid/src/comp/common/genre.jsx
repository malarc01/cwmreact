import React from 'react';

const Genre = (props) => {
	const { genres, textProperty, valueProperty } = props;

	return (
		<ul className="list-group">
			{genres.map((g) => (
				<li key={g[valueProperty]} className="list-group-item list-group-item-action ">
					{g[textProperty]}
				</li>
			))}
		</ul>
	);
};

Genre.defaultProps = {
	textProperty: 'name',
	valueProperty: '_id'
};

export default Genre;

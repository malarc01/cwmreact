import React from 'react';

const Genre = (props) => {
	const { genres, textProperty, valueProperty, onItemSelect, selectedItem } = props;

	return (
		<ul className="list-group">
			{genres.map((g) => (
				<li
					onClick={(event) => onItemSelect(g)}
					key={g[valueProperty]}
					className={g === selectedItem ? 'list-group-item active' : 'list-group-item'}
				>
					{g[textProperty]}
					{/* {console.log('g value is =>', g)} */}
					{/* {g === selectedItem ? console.log('Selected Item matches ') : console.log(' 🕹 ')} */}
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

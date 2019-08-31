import React from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
	const { films, onDelete, onLikeToggle } = props;

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Genre</th>
					<th>Stock</th>
					<th>Rate</th>
					<th />
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{films.map((filmObject) => {
					return (
						<tr key={filmObject._id}>
							<td>{filmObject.title}</td>
							<td>{filmObject.genre.name}</td>
							<td>{filmObject.numberInStock}</td>
							<td>{filmObject.dailyRentalRate}</td>
							<td>
								<Like liked={filmObject.liked} onClick={() => onLikeToggle(filmObject)} />
							</td>

							<td>
								<button onClick={(click) => onDelete(filmObject)} className="btn  btn-danger btn-sm ">
									Delete
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default MoviesTable;

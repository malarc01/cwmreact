import React, { Component } from 'react';

import TableHeader from './common/tableHeader';
import Like from './common/like';

class MoviesTable extends Component {
	columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{ key: 'like' },
		{ key: 'delete' }
	];

	render() {
		const { films, onDelete, onLikeToggle, onSort, sortColumn } = this.props;

		return (
			<table className='table'>
				<TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
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
									<button
										onClick={(click) => onDelete(filmObject)}
										className='btn  btn-danger btn-sm '
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default MoviesTable;

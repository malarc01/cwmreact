import React, { Component } from 'react';
import Like from './common/like';
class MoviesTable extends Component {
	raiseSort = (path) => {
		const sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path) sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}
		this.props.onSort(sortColumn);
	};

	render() {
		const { films, onDelete, onLikeToggle } = this.props;

		return (
			<table className="table">
				<thead>
					<tr>
						<th onClick={() => this.raiseSort('title')}>Title</th>
						<th onClick={() => this.raiseSort('genre.name')}>Genre</th>
						<th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
						<th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
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
									<button
										onClick={(click) => onDelete(filmObject)}
										className="btn  btn-danger btn-sm "
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

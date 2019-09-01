import React, { Component } from 'react';

import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

import Like from './common/like';

class MoviesTable extends Component {
	columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{
			key: 'like',
			content: (filmObject) => (
				<Like liked={filmObject.liked} onClick={() => this.props.onLikeToggle(filmObject)} />
			)
		},
		{
			key: 'delete',
			content: (filmObject) => (
				<button onClick={(click) => this.props.onDelete(filmObject)} className='btn  btn-danger btn-sm '>
					Delete
				</button>
			)
		}
	];

	render() {
		const { films, onSort, sortColumn } = this.props;

		return (
			<table className='table'>
				<TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
				<TableBody columns={this.columns} data={films} />
				{/* <tbody>
					{films.map((filmObject) => {
						return (
							<tr key={filmObject._id}>
								<td>{filmObject.title}</td>
								<td>{filmObject.genre.name}</td>
								<td>{filmObject.numberInStock}</td>
								<td>{filmObject.dailyRentalRate}</td>
								<td />

								<td />
							</tr>
						);
					})}
				</tbody> */}
			</table>
		);
	}
}

export default MoviesTable;

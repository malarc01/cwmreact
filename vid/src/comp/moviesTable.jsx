import React, { Component } from 'react';

import Table from './common/table';
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

		return <Table columns={this.columns} data={films} sortColumn={sortColumn} onSort={onSort} />;
	}
}

export default MoviesTable;

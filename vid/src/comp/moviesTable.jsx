import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Table from './common/table';
import Like from './common/like';
import MovieForm from './movieForm';

class MoviesTable extends Component {
	columns = [
		// { content: (value) => <Link to='/id' test={value} />, label: 'Title' },
		{ path: 'title', label: 'Title', content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{
			key: 'like',
			content: (filmObject) => (
				<Like
					test={filmObject.a}
					liked={filmObject.liked}
					onClick={() => this.props.onLikeToggle(filmObject)}
				/>
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
		// console.log('PROPS FOR MOVIE STABLE IS', this.props);
		console.log('this.columns => ', this.columns);
		console.log('moviesTable.jsx props => ', this.props);

		const { films, onSort, sortColumn, handleAdd } = this.props;

		return (
			<div>
				<Table columns={this.columns} data={films} sortColumn={sortColumn} onSort={onSort} />

				<Route path={'/id'} component={MovieForm} />
			</div>
		);
	}
}

export default MoviesTable;

import React, { Component } from 'react';

import MoviesTable from './moviesTable';

import Pagination from './common/pagination';
import Genre from './common/genre';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

const divStyle = {
	margin: '40px',
	border: '5px solid pink'
};

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		currentPage: 1,
		pageSize: 4,
		sortColumn: {
			path: 'title',
			order: 'asc'
		}
	};

	componentDidMount() {
		const allGenres = [ { _id: '', name: 'All Genres' }, ...getGenres() ];
		console.log(allGenres);

		this.setState({ movies: getMovies(), genres: allGenres });
	}

	handleDelete = (film) => {
		console.log('film selected for deletion is => ', film);

		const newMoviesArray = this.state.movies.filter(
			(m) =>
				// console.log("MMMMMMMMMMMMMMMMMM is =>", m);
				m._id !== film._id
		);
		this.setState({ movies: newMoviesArray });

		console.log('💕');
	};

	handleLike = (filmObject) => {
		console.log('Like Clicked', filmObject);
		const films = [ ...this.state.movies ];
		const index = films.indexOf(filmObject);
		films[index] = { ...films[index] };
		films[index].liked = !films[index].liked;
		this.setState({ movies: films });
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};
	handleGenreSelect = (genre) => {
		console.log('GENRE SELECTED/CLICKED IS => ', genre);
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleSort = (sortColumn) => {
		// console.log('THE PATH IS =>', path);

		this.setState({ sortColumn });
	};

	getPagedData = () => {
		const { pageSize, currentPage, sortColumn, selectedGenre, movies } = this.state;
		const filtered =
			selectedGenre && selectedGenre._id ? movies.filter((f) => f.genre._id === selectedGenre._id) : movies;

		const sorted = _.orderBy(filtered, [ sortColumn.path ], [ sortColumn.order ]);

		const films = paginate(sorted, currentPage, pageSize);

		return { totalCount: filtered.length, data: films };
	};

	render() {
		// const filmLength = this.state.movies.length;
		//  filmLength destructing below
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, sortColumn } = this.state;
		if (count === 0) {
			console.log('ZERO');
			return <p>No Movies in the database</p>;
		}

		const { totalCount, data: movies } = this.getPagedData();

		return (
			<div className='row' style={divStyle}>
				<div className='col-3'>
					<Genre
						genres={this.state.genres}
						selectedItem={this.state.selectedGenre}
						onItemSelect={this.handleGenreSelect}
					/>
				</div>
				<div className='col'>
					<p>Showing {totalCount} movies in the database</p>
					<MoviesTable
						films={movies}
						sortColumn={this.state.sortColumn}
						onLikeToggle={this.handleLike}
						onDelete={this.handleDelete}
						onSort={this.handleSort}
					/>
					<Pagination
						itemsCount={totalCount}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					/>
				</div>
				<h2>movies.jsx</h2>
			</div>
		);

		// return <Movie moviesArray={this.state.movies} />;
	}
}

export default Movies;

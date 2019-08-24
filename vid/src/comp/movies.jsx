import React, { Component } from 'react';
import Movie from './movie';

import { getMovies } from '../services/fakeMovieService';

const divStyle = {
	margin: '40px',
	border: '5px solid pink'
};

class Movies extends Component {
	state = {
		movies: getMovies()
	};

	handleDelete = (movie) => {
		console.log(movie);
	};
	render() {
		return (
			<div style={divStyle}>
				<h2>movies.jsx</h2>
				{this.state.movies.map((movie) => <Movie key={movie.id} filmArray={this.state.movies} />)}
			</div>
		);

		// return <Movie moviesArray={this.state.movies} />;
	}
}

export default Movies;

import React, { Component } from 'react';
import Movie from './movie';

import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
	state = {
		movies: getMovies()
	};

	handleDelete = (movie) => {
		console.log(movie);
	};
	render() {
		return <Movie />;
	}
}

export default Movies;

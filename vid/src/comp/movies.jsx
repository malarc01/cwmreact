import React, { Component } from 'react';

import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';

const divStyle = {
	margin: '40px',
	border: '5px solid pink'
};

class Movies extends Component {
	state = {
		movies: getMovies(),
		pageSize: 4
	};

	handleDelete = (movie) => {
		console.log(movie);
	};
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
		console.log(page);
	};

	render() {
		// const filmLength = this.state.movies.length;
		//  filmLength destructing below
		const { length: count } = this.state.movies;
		if (count === 0) {
			console.log('ZERO');
			return <p>No Movies</p>;
		}
		return (
			<div style={divStyle}>
				<h2>movies.jsx</h2>

				<p>Showing {count} movies in the database</p>
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
						{this.state.movies.map((filmObject) => {
							return (
								<tr key={filmObject._id}>
									<td>{filmObject.title}</td>
									<td>{filmObject.genre.name}</td>
									<td>{filmObject.numberInStock}</td>
									<td>{filmObject.dailyRentalRate}</td>
									<td>
										<Like
											liked={filmObject.liked}
											onLikeToggle={() => this.handleLike(filmObject)}
										/>
									</td>

									<td>
										<button
											onClick={(click) => this.handleDelete(filmObject)}
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
				<Pagination itemsCount={count} pageSize={10} onPageChange={this.handlePageChange} />
			</div>
		);

		// return <Movie moviesArray={this.state.movies} />;
	}
}

export default Movies;

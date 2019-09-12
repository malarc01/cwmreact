import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form {
	state = {
		data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
		genres: [],
		errors: {}
	};

	schema = {
		_id: Joi.string(),
		title: Joi.string().required().label('TITLE'),
		genreId: Joi.string().required().min(5).label('Genre'),
		numberInStock: Joi.number().required().min(0).max(100).label('# in Stock'),
		dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate')
	};

	componentDidMount() {
		const genres = getGenres();
		this.setState({ genres });

		const movieId = this.props.match.params.id;
		if (movieId === 'new') return;

		const movie = getMovie(movieId);
		if (!movie) return this.props.history.replace('/not-found');

		this.setState({ data: this.mapToViewModel(movie) });
	}

	mapToViewModel(movie) {
		return {
			_id: movie._id,
			title: movie.title,
			genreId: movie.genre._id,
			numberInStock: movie.numberInStock,
			dailyRentalRate: movie.dailyRentalRate
		};
	}

	doSubmit = () => {
		saveMovie(this.state.data);

		this.props.history.push('/movies.');
	};
	// handleDataSubmit = (film) => {
	// 	console.log(' handleDataSubmit new film => ', film);

	// 	const newDataObject = this.state.data.filter(
	// 		(m) =>
	// 			// console.log("MMMMMMMMMMMMMMMMMM is =>", m);
	// 			m._id !== film._id
	// 	);

	// 	this.setState({ movies: newMoviesArray });

	// 	console.log('handleDelete () end');
	// };

	// type={type}
	// name={name}
	// value={data[name]}
	// label={label}
	// onChange={this.handleChange}
	// error={errors[name]}
	// renderInput(name, label, type = 'text') {
	// 	console.log('renderInput(NAME, LABEL, TYPE) =>', name, label, type);

	// 	const { data, errors } = this.state;

	// 	return (
	// 		<Input
	// 			type={type}
	// 			name={name}
	// 			value={data[name]}
	// 			label={label}
	// 			onChange={this.handleChange}
	// 			error={errors[name]}
	// 		/>
	// 	);
	// }

	render() {
		console.log('MovieForm this.state => ', this.state);
		console.log('MovieForm this.props => ', this.props);
		return (
			<div>
				<h1>MovieForm</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('title', 'TITLE')}
					{this.renderSelect('genreId', 'GENRE', this.state.genres)}
					{this.renderInput('numberInStock', 'NUM IN STOCK', 'number')}
					{this.renderInput('dailyRentalRate', 'RATE')}
					{this.renderButton('SAVE')}
				</form>
			</div>
		);
	}
}

// export default MovieForm;

// const MovieForm = ({ match, history }) => {
// 	return (

// 	);
// };

export default MovieForm;

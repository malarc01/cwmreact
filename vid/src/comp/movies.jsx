import React, { Component } from "react";
import Movie from "./movie";

import { getMovies } from "../services/fakeMovieService";

const divStyle = {
  margin: "40px",
  border: "5px solid pink"
};

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log(movie);
  };
  handleDelete = film => {
    console.log(film);

    const newMoviesArray = this.state.movies.filter(m => m._id !== film._id);
    this.setState({ movies: newMoviesArray });

    console.log("💕");
  };
  render() {
    return (
      <div style={divStyle}>
        <h2>movies.jsx</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(filmObject => {
              return (
                <tr key={filmObject._id}>
                  <td>{filmObject.title}</td>
                  <td>{filmObject.genre.name}</td>
                  <td>{filmObject.numberInStock}</td>
                  <td>{filmObject.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={click => this.handleDelete(filmObject)}
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
      </div>
    );

    // return <Movie moviesArray={this.state.movies} />;
  }
}

export default Movies;

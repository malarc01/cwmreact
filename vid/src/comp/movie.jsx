import React, { Component } from "react";

const divStyle = {
  margin: "40px",
  border: "5px solid red"
};

class Movie extends Component {
  render() {
    // const { moviesArray } = this.props;
    return (
      <div style={divStyle}>
        <h3>Movie Comp</h3>
        <h3>⚔️ blank=>{this.props.gjpoaspjodgsdgjops}</h3>
        <h3>
          Render=> {"=> => "}
          {this.props.filmArray.map(film => {
            return film.title;
          })}
        </h3>
      </div>
    );
  }
}

export default Movie;

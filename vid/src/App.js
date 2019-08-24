import React from 'react';

import './App.css';
import Movies from './comp/movies';

const divStyle = {
	margin: '40px',
	border: '5px solid purple'
};

function App() {
	return (
		<main style={divStyle} className="container">
			<h1>App.js</h1>
			<Movies />
		</main>
	);
}

export default App;

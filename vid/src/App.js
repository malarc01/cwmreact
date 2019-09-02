import React from 'react';

import './App.css';
import Movies from './comp/movies';
import Customers from './comp/customers';
import Rentals from './comp/rentals';

const divStyle = {
	margin: '40px',
	border: '5px solid purple'
};

function App() {
	return (
		<main style={divStyle} className='container'>
			<h1>App.js</h1>
			<Movies />

			<Customers />
			<Rentals />
		</main>
	);
}

export default App;

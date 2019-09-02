import React from 'react';

import { Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';

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
			<h1> FILMS App.jsx</h1>

			<NavLink to='/movies'>Movies</NavLink>
			<NavLink to='/customers'>Customers</NavLink>
			<NavLink to='/rentals'>Rentals</NavLink>

			<Link to='/movies'>M</Link>
			<Link to='/customers'>C</Link>
			<Link to='/rentals'>R</Link>

			<Switch>
				<Route path='/movies' component={Movies} />
				{/* <Route path='/Customers' component={Customers} /> */}
				<Route to='/customers' component={Customers} />
				<Route path='/rentals' component={Rentals} />
				<Redirect from='/' to='/movies' />
			</Switch>
		</main>
	);
}

export default App;

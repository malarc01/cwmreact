import React from 'react';

import { Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';

import './App.css';

import Movies from './comp/movies';
import Customers from './comp/customers';
import Rentals from './comp/rentals';
import NotFound from './comp/notFound';
import NavBar from './comp/navBar';

const divStyle = {
	margin: '40px',
	border: '5px solid purple'
};

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<main style={divStyle} className='container'>
				<NavLink to='/movies'>Movies</NavLink>
				<NavLink to='/customers'>Customers</NavLink>
				<NavLink to='/rentals'>Rentals</NavLink>

				<h1> FILMS App.jsx</h1>
				{/* <Link to='/movies'>M</Link>
			<Link to='/customers'>C</Link>
			<Link to='/rentals'>R</Link> */}

				<Switch>
					<Route path='/movies' component={Movies} />
					{/* <Route path='/Customers' component={Customers} /> */}
					<Route path='/customers' component={Customers} />
					<Route path='/rentals' component={Rentals} />
					<Route path='/not-found' component={NotFound} />

					<Redirect from='/' exact to='/movies' />
					<Redirect to='/not-found' />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;

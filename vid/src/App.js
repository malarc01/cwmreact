import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Movies from './comp/movies';
import Customers from './comp/customers';
import Rentals from './comp/rentals';
import NotFound from './comp/notFound';
import NavBar from './comp/navBar';
import MovieForm from './comp/movieForm';
import LoginForm from './comp/loginForm';
import RegisterForm from './comp/registerForm';

const divStyle = {
	margin: '40px',
	border: '5px solid purple'
};

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<main style={divStyle} className='container'>
				<Switch>
					<Route path='/register' component={RegisterForm} />
					<Route path='/login' component={LoginForm} />
					<Route path='/movies/:id' component={MovieForm} />
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

import React from 'react';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	return (
		<React.Fragment>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link className='navbar-brand' to='/'>
					FilmDB
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						<li className='nav-item '>
							<NavLink className='nav-link' to='/movies'>
								Movies
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/customers'>
								Customers
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/rentals'>
								Rentals
							</NavLink>
							<NavLink className='nav-link' to='/login'>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavBar;

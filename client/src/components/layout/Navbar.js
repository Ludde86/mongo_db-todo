import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [ routes, setRoutes ] = useState([
		{
			name: 'Att Göra: ',
			page: '/'
		},
		{
			name: 'Hemma',
			page: '/home'
		},
		{
			name: 'Handla',
			page: '/shopping'
		}
	]);

	return (
		<div className="navbar-list">
			{routes.map((route) => (
				<div className="navbar-item">
					<li>
						<Link to={route.page}>{route.name}</Link>
					</li>
				</div>
			))}
		</div>
	);
};

export default Navbar;

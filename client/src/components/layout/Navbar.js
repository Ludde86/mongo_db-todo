import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const routes = [ '', 'home', 'shopping' ];
	//  const [ routes, setRoutes ] = useState([
	// 	{
	// 		name: 'start'
	// 	},
	// 	{
	// 		name: 'home'
	// 	},
	// 	{
	// 		name: 'shopping'
	// 	}
	// ]);

	return (
		<div className="navbar-list">
			{routes.map((route) => (
				<div className="navbar-item">
					{/* <li to={`/${route}`} >{route}</li> */}
					<li>
						<Link to={`/${route}`}>{route}</Link>
					</li>
				</div>
			))}
		</div>
	);
};

export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TodoState from './context/todo/TodoState';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Start from './components/pages/Start';
import Shopping from './components/pages/Shopping';
import ShoppingState from './context/shopping/ShoppingState';

const App = () => {
	return (
		<Router>
			<div className="navbar-container">
				<Navbar />
			</div>
			<div className="app-container">
				<TodoState>
					<ShoppingState>
						<Switch>
							<Route exact path="/" component={Start} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/shopping" component={Shopping} />
						</Switch>
					</ShoppingState>
				</TodoState>
			</div>
		</Router>
	);
};

export default App;

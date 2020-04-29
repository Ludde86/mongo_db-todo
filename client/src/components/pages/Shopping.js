import React from 'react';
import ShoppingForm from '../shopping/ShoppingForm';
import ShoppingList from '../shopping/ShoppingList';

const Shopping = () => {
	return (
		<div>
			<h1>Shopping List</h1>
			<ShoppingForm />
			<ShoppingList />
		</div>
	);
};

export default Shopping;

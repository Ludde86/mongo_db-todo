import React, { useContext } from 'react';
import ShoppingContext from '../../context/shopping/shoppingContext';
import axios from 'axios';

const ShoppingItem = ({ item }) => {
	const shoppingContext = useContext(ShoppingContext);
	const { deleteItem } = shoppingContext;

	const updateItem = async (id, message) => {
		try {
			await axios.put(`/api/putShopping/${id}`, 'brakare');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<li>{item.message}</li>
			<button onClick={() => deleteItem(item._id)}>Delete</button>
			<button onClick={() => updateItem(item._id)}>Edit</button>
		</div>
	);
};

export default ShoppingItem;

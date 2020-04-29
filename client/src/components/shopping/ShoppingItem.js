import React from 'react';
import axios from 'axios';

const ShoppingItem = ({ item }) => {
	const deleteItem = async (id) => {
		try {
			await axios.delete(`/api/deleteShopping/${id}`);
		} catch (error) {
			console.error(error);
		}
	};
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

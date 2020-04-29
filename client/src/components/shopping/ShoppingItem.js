import React from 'react';
import axios from 'axios';

const ShoppingItem = ({ item }) => {
	const deleteItem = async (id) => {
		console.log('id from item: ', id);
		try {
			await axios.delete(`/api/deleteShopping/${id}`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<li>{item.message}</li>
			<button onClick={() => deleteItem(item._id)}>Delete</button>
			<button>Edit</button>
		</div>
	);
};

export default ShoppingItem;

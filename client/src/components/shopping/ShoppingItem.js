import React, { useContext } from 'react';
import ShoppingContext from '../../context/shopping/shoppingContext';
// import TodoContext from '../../context/todo/todoContext';

const ShoppingItem = ({ item }) => {
	const shoppingContext = useContext(ShoppingContext);
	const { deleteItem, setEditItem } = shoppingContext;

	return (
		<div>
			<li>{item.message}</li>
			<button onClick={() => deleteItem(item._id)}>Delete</button>
			<button onClick={() => setEditItem(item._id, item.message)}>Edit</button>
		</div>
	);
};

export default ShoppingItem;

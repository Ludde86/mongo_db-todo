import React, { useContext } from 'react';
import ShoppingContext from '../../context/shopping/shoppingContext';
import TodoContext from '../../context/todo/todoContext';

const ShoppingForm = () => {
	const shoppingContext = useContext(ShoppingContext);
	const todoContext = useContext(TodoContext);
	const { addShoppingItem } = shoppingContext;
	const { message, setMessage } = todoContext;

	return (
		<form onSubmit={() => addShoppingItem(message)}>
			<input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
			<input type="submit" value="Lägg till" />
		</form>
	);
};

export default ShoppingForm;

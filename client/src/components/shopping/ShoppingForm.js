import React, { useContext } from 'react';
import ShoppingContext from '../../context/shopping/shoppingContext';
import TodoContext from '../../context/todo/todoContext';

const ShoppingForm = () => {
	const shoppingContext = useContext(ShoppingContext);
	const todoContext = useContext(TodoContext);
	const { addShoppingItem, updateItem, editItem, setEditItem } = shoppingContext;
	const { message, setMessage, isEdit } = todoContext;

	// console.log('editItem in form: ', editItem);
	// console.log('id in form: ', editItem.id);
	// console.log('message in form: ', editItem.message);

	return (
		<div>
			{isEdit ? (
				<form onSubmit={() => updateItem(editItem.id, editItem.message)}>
					<input
						type="text"
						onChange={(e) => setEditItem(editItem.id, e.target.value)}
						name="editItem"
						value={editItem.message}
						placeholder={editItem.message}
					/>
					<input type="submit" value="Uppdatera" />
				</form>
			) : (
				<form onSubmit={() => addShoppingItem(message)}>
					<input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
					<input type="submit" value="Lägg till" />
				</form>
			)}
		</div>
	);
};

export default ShoppingForm;

import React, { useContext } from 'react';
import ShoppingContext from '../../context/shopping/shoppingContext';
import TodoContext from '../../context/todo/todoContext';

const ShoppingForm = () => {
	const shoppingContext = useContext(ShoppingContext);
	const todoContext = useContext(TodoContext);
	const { addShoppingItem, updateItem, editItem, setEditItem } = shoppingContext;
	const { message, setMessage, isEdit } = todoContext;

	return (
		<div className="form-container">
			{isEdit ? (
				<form onSubmit={(e) => updateItem(e, editItem.id, editItem.message)}>
					<input
						className="input-field"
						type="text"
						onChange={(e) => setEditItem(editItem.id, e.target.value)}
						name="editItem"
						value={editItem.message}
						placeholder={editItem.message}
					/>
					<input className="input-submit" type="submit" value="Uppdatera" />
				</form>
			) : (
				<form onSubmit={(e) => addShoppingItem(e, message)}>
					<input
						className="input-field"
						type="text"
						name="message"
						value={message}
						placeholder="Lägg till att handla..."
						onChange={(e) => setMessage(e.target.value)}
					/>
					<input className="input-submit" type="submit" value="Lägg till" />
				</form>
			)}
		</div>
	);
};

export default ShoppingForm;

import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoForm = () => {
	const todoContext = useContext(TodoContext);
	const {
		message,
		setMessage,
		putDataToDB,
		isEdit,
		objectToUpdate,
		setObjectToUpdate,
		idToUpdate,
		updateDB
	} = todoContext;

	return (
		<div className="todo-form-container">
			{isEdit ? (
				<form onSubmit={() => updateDB(idToUpdate, objectToUpdate)}>
					<input
						type="text"
						onChange={(e) => setObjectToUpdate(idToUpdate, e.target.value)}
						name="objectToUpdate"
						value={objectToUpdate}
						placeholder={objectToUpdate}
					/>
					<input type="submit" value="UPDATE" />
				</form>
			) : (
				<form onSubmit={() => putDataToDB(message)}>
					<input
						type="text"
						onChange={(e) => setMessage(e.target.value)}
						name="message"
						value={message}
						placeholder="add todo"
					/>
					<input type="submit" value="ADD" />
				</form>
			)}
		</div>
	);
};

export default TodoForm;

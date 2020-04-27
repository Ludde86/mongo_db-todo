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
		<div style={{ padding: '10px' }}>
			{isEdit ? (
				<form onSubmit={() => updateDB(idToUpdate, objectToUpdate)}>
					<input
						type="text"
						onChange={(e) => setObjectToUpdate(idToUpdate, e.target.value)}
						name="objectToUpdate"
						value={objectToUpdate}
						placeholder={objectToUpdate}
						style={{ width: '200px' }}
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
						style={{ width: '200px' }}
					/>
					<input type="submit" value="ADD" />
				</form>
			)}
		</div>
	);
};

export default TodoForm;

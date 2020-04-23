import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo }) => {
	const todoContext = useContext(TodoContext);
	const { deleteFromDB, setObjectToUpdate, objectToUpdate, updateDB } = todoContext;
	return (
		<li style={{ padding: '10px' }}>
			<span style={{ color: 'gray' }}> todo: </span>
			{todo.message}
			<button onClick={() => deleteFromDB(todo.id)}>DELETE</button>
			<input
				type="text"
				style={{ width: '200px' }}
				onChange={(e) => setObjectToUpdate(e.target.value)}
				placeholder="update data"
			/>
			<button onClick={() => updateDB(todo.id, objectToUpdate)}>UPDATE</button> {objectToUpdate}
		</li>
	);
};

export default TodoItem;

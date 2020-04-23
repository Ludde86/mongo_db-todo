import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo, objectToUpdate }) => {
	const todoContext = useContext(TodoContext);
	const { deleteFromDB, setObjectToUpdate, updateDB } = todoContext;
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
			<button onClick={() => updateDB(todo.id, objectToUpdate)}>UPDATE</button>
		</li>
	);
};

export default TodoItem;

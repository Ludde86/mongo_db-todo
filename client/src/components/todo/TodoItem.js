import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo }) => {
	const todoContext = useContext(TodoContext);
	const { deleteFromDB, setObjectToUpdate } = todoContext;
	return (
		<li style={{ padding: '10px' }}>
			<span style={{ color: 'gray' }}> todo: </span>
			{todo.message}

			<span>
				<button onClick={() => deleteFromDB(todo.id)}>DELETE</button>
				<button onClick={() => setObjectToUpdate(todo.id, todo.message)}>EDIT</button>
			</span>
		</li>
	);
};

export default TodoItem;

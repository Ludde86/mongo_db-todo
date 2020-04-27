import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo }) => {
	const todoContext = useContext(TodoContext);
	const { deleteFromDB, setObjectToUpdate } = todoContext;
	return (
		<li>
			<div className="todo-item-content">
				<div className="todo-message"> {todo.message} </div>

				<div className="del-upd-buttons">
					<button onClick={() => deleteFromDB(todo.id)}>DELETE</button>
					<button onClick={() => setObjectToUpdate(todo.id, todo.message)}>EDIT</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;

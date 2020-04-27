import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo }) => {
	const todoContext = useContext(TodoContext);
	const { deleteFromDB, setObjectToUpdate, objectToUpdate, updateDB, setTrue, isEdit } = todoContext;
	return (
		<li style={{ padding: '10px' }}>
			<span style={{ color: 'gray' }}> todo: </span>
			{todo.message}

			{/* {isEdit ? (
				<span>
					<input
						type="text"
						style={{ width: '200px' }}
						onChange={(e) => setObjectToUpdate(e.target.value)}
						value={objectToUpdate}
						placeholder="update data"
					/>
					<button onClick={() => updateDB(todo.id, objectToUpdate)}>UPDATE</button>
				</span>
			) : ( */}
			<span>
				<button onClick={() => deleteFromDB(todo.id)}>DELETE</button>
				<button onClick={() => setObjectToUpdate(todo.message)}>EDIT</button>
			</span>
			{/* )} */}
		</li>
	);
};

export default TodoItem;

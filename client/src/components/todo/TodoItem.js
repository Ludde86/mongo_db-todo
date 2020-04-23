import React from 'react';

const TodoItem = ({ todo, deleteFromDB, setObjectToUpdate, updateDB, objectToUpdate }) => {
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

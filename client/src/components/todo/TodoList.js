import React from 'react';

const TodoList = ({ todos, deleteFromDB, setObjectToUpdate, updateDB, objectToUpdate }) => {
	return (
		<ul>
			{todos.length <= 0 ? (
				'NO DB ENTRIES YET'
			) : (
				todos.map((todo) => (
					<li style={{ padding: '10px' }} key={todo.id}>
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
				))
			)}
		</ul>
	);
};

export default TodoList;

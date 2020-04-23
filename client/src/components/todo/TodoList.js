import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteFromDB, setObjectToUpdate, updateDB, objectToUpdate }) => {
	return (
		<ul>
			{todos.length <= 0 ? (
				'NO DB ENTRIES YET'
			) : (
				todos.map((todo) => (
					<div key={todo.id}>
						<TodoItem
							todo={todo}
							todos={todos}
							deleteFromDB={deleteFromDB}
							setObjectToUpdate={setObjectToUpdate}
							updateDB={updateDB}
							objectToUpdate={objectToUpdate}
						/>
					</div>
				))
			)}
		</ul>
	);
};

export default TodoList;

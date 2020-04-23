import React, { useEffect, useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../../context/todo/todoContext';

const TodoList = () => {
	const todoContext = useContext(TodoContext);

	const { todos, getDataFromDb, intervalIsSet, setIntervalIsSet } = todoContext;

	useEffect(
		() => {
			getDataFromDb();
			if (!intervalIsSet) {
				let interval = setInterval(getDataFromDb, 1000);
				setIntervalIsSet(interval);
			}
		},
		// eslint-disable-next-line
		[ intervalIsSet ]
	);

	return (
		<ul>
			{todos.length <= 0 ? (
				'NO DB ENTRIES YET'
			) : (
				todos.map((todo) => (
					<div key={todo.id}>
						<TodoItem todo={todo} />
					</div>
				))
			)}
		</ul>
	);
};

export default TodoList;

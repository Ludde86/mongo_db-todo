import React from 'react';
import { useReducer } from 'react';
import TodoContext from './todoContext';

const TodoState = () => {
	const initialState = {
		todos: [],
		message: '',
		intervalIsSet: false,
		objectToUpdate: ''
	};

	const [ state, dispatch ] = useReducer(todoReducer, initialState);

	const getDataFromDb = () => {
		fetch('/api/getData').then((todos) => todos.json()).then((res) => setTodos(res.data));
	};

	const putDataToDB = (message) => {
		let currentIds = todos.map((todo) => todo.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post('/api/putData', {
			id: idToBeAdded,
			message: message
		});

		setMessage('');
	};

	const deleteFromDB = (idTodelete) => {
		// parseInt(idTodelete);
		let objIdToDelete = null;
		todos.forEach((todo) => {
			// eslint-disable-next-line
			if (todo.id == idTodelete) {
				objIdToDelete = todo._id;
			}
		});

		axios.delete('/api/deleteData', {
			data: {
				id: objIdToDelete
			}
		});
	};

	const updateDB = (idToUpdate, objectToUpdate) => {
		let objIdToUpdate = null;
		parseInt(idToUpdate);
		todos.forEach((todo) => {
			// eslint-disable-next-line
			if (todo.id == idToUpdate) {
				objIdToUpdate = todo._id;
			}
		});

		axios.post('/api/updateData', {
			id: objIdToUpdate,
			update: { message: objectToUpdate }
		});

		setObjectToUpdate('');
	};

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
				message: state.message,
				intervalIsSet: state.intervalIsSet,
				objectToUpdate: state.objectToUpdate
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoState;

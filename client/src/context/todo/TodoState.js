import React from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { GET_DATA, SET_INTERVAL, SET_MESSAGE, UPDATE_MESSAGE } from '../types';

const TodoState = (props) => {
	const initialState = {
		todos: [],
		message: '',
		intervalIsSet: false,
		objectToUpdate: ''
	};

	const [ state, dispatch ] = useReducer(todoReducer, initialState);
	const { todos } = state;

	const getDataFromDb = () => {
		fetch('api/getData').then((todos) => todos.json()).then((res) =>
			dispatch({
				type: GET_DATA,
				payload: res.data
			})
		);
	};

	const putDataToDB = (message) => {
		console.log('message: ', message);
		let currentIds = todos.map((todo) => todo.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post('/api/putData', {
			id: idToBeAdded,
			message: message
		});
	};

	const deleteFromDB = (idTodelete) => {
		let objIdToDelete = null;
		todos.forEach((todo) => {
			if (todo.id === idTodelete) {
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
		todos.forEach((todo) => {
			if (todo.id === idToUpdate) {
				objIdToUpdate = todo._id;
			}
		});

		axios.post('/api/updateData', {
			id: objIdToUpdate,
			update: { message: objectToUpdate }
		});
	};

	const setIntervalIsSet = (interval) => {
		dispatch({
			type: SET_INTERVAL,
			payload: interval
		});
	};

	const setMessage = (message) => {
		dispatch({
			type: SET_MESSAGE,
			payload: message
		});
	};

	const setObjectToUpdate = (message) => {
		dispatch({
			type: UPDATE_MESSAGE,
			payload: message
		});
	};

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
				message: state.message,
				intervalIsSet: state.intervalIsSet,
				objectToUpdate: state.objectToUpdate,
				getDataFromDb,
				putDataToDB,
				setMessage,
				deleteFromDB,
				updateDB,
				setObjectToUpdate,
				setIntervalIsSet
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoState;

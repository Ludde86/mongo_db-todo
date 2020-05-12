import React from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
	GET_DATA,
	SET_INTERVAL,
	SET_MESSAGE,
	UPDATE_MESSAGE,
	CLEAR_MESSAGE,
	SET_ID,
	SET_TRUE,
	SET_FALSE
} from '../types';

const TodoState = (props) => {
	const initialState = {
		todos: [],
		message: '',
		intervalIsSet: false,
		objectToUpdate: '',
		idToUpdate: null,
		isEdit: false
	};

	const [ state, dispatch ] = useReducer(todoReducer, initialState);
	const { todos } = state;

	const getDataFromDb = () => {
		fetch('http://192.168.1.52/api/getData').then((todos) => todos.json()).then((res) =>
			dispatch({
				type: GET_DATA,
				payload: res.data
			})
		);
	};

	const putDataToDB = (e, message) => {
		e.preventDefault();
		let currentIds = todos.map((todo) => todo.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post('http://localhost:3001/api/putData', {
			id: idToBeAdded,
			message: message
		});
		clearMessage();
	};

	const deleteFromDB = (idTodelete) => {
		let objIdToDelete = null;
		todos.forEach((todo) => {
			if (todo.id === idTodelete) {
				objIdToDelete = todo._id;
			}
		});

		axios.delete('https://peaceful-journey-03079.herokuapp.com/api/deleteData', {
			data: {
				id: objIdToDelete
			}
		});
	};

	const updateDB = (e, idToUpdate, objectToUpdate) => {
		e.preventDefault();

		let objIdToUpdate = null;
		todos.forEach((todo) => {
			if (todo.id === idToUpdate) {
				objIdToUpdate = todo._id;
			}
		});

		axios.post('https://peaceful-journey-03079.herokuapp.com/api/updateData', {
			id: objIdToUpdate,
			update: { message: objectToUpdate }
		});
		setFalse();
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

	const setObjectToUpdate = (id, message) => {
		setIdToUpdate(id);
		dispatch({
			type: UPDATE_MESSAGE,
			payload: message
		});
	};

	const setIdToUpdate = (id) => {
		dispatch({
			type: SET_ID,
			payload: id
		});
	};

	const clearMessage = () => {
		dispatch({
			type: CLEAR_MESSAGE,
			payload: ''
		});
	};

	const setTrue = () => {
		dispatch({
			type: SET_TRUE,
			payload: true
		});
	};

	const setFalse = () => {
		dispatch({
			type: SET_FALSE,
			payload: false
		});
	};

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
				message: state.message,
				intervalIsSet: state.intervalIsSet,
				objectToUpdate: state.objectToUpdate,
				idToUpdate: state.idToUpdate,
				isEdit: state.isEdit,
				getDataFromDb,
				putDataToDB,
				setMessage,
				deleteFromDB,
				updateDB,
				setObjectToUpdate,
				setIdToUpdate,
				setIntervalIsSet,
				setTrue,
				setFalse,
				clearMessage
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoState;

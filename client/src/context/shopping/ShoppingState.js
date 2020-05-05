import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import ShoppingContext from './shoppingContext';
import shoppingReducer from './shoppingReducer';
import { GET_SHOPPINGLIST, ADD_SHOPPINGITEM, EDIT_MESSAGE } from '../types';
import TodoContext from '../todo/todoContext';

const ShoppingState = (props) => {
	const initialState = {
		shoppingList: [],
		editItem: { id: '', message: '' }
	};

	const [ state, dispatch ] = useReducer(shoppingReducer, initialState);
	const todoContext = useContext(TodoContext);
	const { setTrue } = todoContext;

	const getShoppingList = async (data) => {
		try {
			const res = await axios.get('http://localhost:3001/api/getShopping');
			dispatch({
				type: GET_SHOPPINGLIST,
				payload: res.data.data
			});
		} catch (error) {
			console.error(error);
		}
	};

	const addShoppingItem = async (message) => {
		try {
			const res = await axios.post('http://localhost:3001/api/postShopping', { message: message });
			dispatch({
				type: ADD_SHOPPINGITEM,
				payload: res
			});
		} catch (error) {
			console.error(error);
		}
	};

	const deleteItem = async (id) => {
		try {
			await axios.delete(`http://localhost:3001/api/deleteShopping/${id}`);
		} catch (error) {
			console.error(error);
		}
	};

	const updateItem = async (id, message) => {
		try {
			await axios.put(`http://localhost:3001/api/putShopping/${id}`, { update: message });
		} catch (error) {
			console.error(error);
		}
	};

	const setEditItem = (id, message) => {
		setTrue();
		dispatch({
			type: EDIT_MESSAGE,
			payload: { id, message }
		});
	};

	return (
		<ShoppingContext.Provider
			value={{
				shoppingList: state.shoppingList,
				message: state.message,
				editItem: state.editItem,
				getShoppingList,
				addShoppingItem,
				deleteItem,
				updateItem,
				setEditItem
			}}
		>
			{props.children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingState;

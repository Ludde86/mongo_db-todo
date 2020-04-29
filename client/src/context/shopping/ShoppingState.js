import React, { useReducer } from 'react';
import axios from 'axios';
import ShoppingContext from './shoppingContext';
import shoppingReducer from './shoppingReducer';
import { GET_SHOPPINGLIST, ADD_SHOPPINGITEM } from '../types';

const ShoppingState = (props) => {
	const initialState = {
		shoppingList: []
	};

	const [ state, dispatch ] = useReducer(shoppingReducer, initialState);

	const getShoppingList = async (data) => {
		try {
			const res = await axios.get('/api/getShopping');
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
			const res = await axios.post('/api/postShopping', { message: message });
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
			await axios.delete(`/api/deleteShopping/${id}`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ShoppingContext.Provider
			value={{
				shoppingList: state.shoppingList,
				message: state.message,
				getShoppingList,
				addShoppingItem,
				deleteItem
			}}
		>
			{props.children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingState;

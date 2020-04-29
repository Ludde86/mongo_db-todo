import React, { useReducer } from 'react';
import axios from 'axios';
import ShoppingContext from './shoppingContext';
import shoppingReducer from './shoppingReducer';
import { GET_SHOPPINGLIST } from '../types';

const ShoppingState = (props) => {
	const initialState = {
		shoppingList: [],
		message: ''
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

	return (
		<ShoppingContext.Provider
			value={{
				shoppingList: state.shoppingList,
				message: state.message,
				getShoppingList
			}}
		>
			{props.children}
		</ShoppingContext.Provider>
	);
};

export default ShoppingState;

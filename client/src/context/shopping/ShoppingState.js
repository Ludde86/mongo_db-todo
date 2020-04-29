import React, { useReducer } from 'react';
import ShoppingContext from './shoppingContext';
import { SET_SHOPPINGLIST } from '../types';

const shoppingState = (props) => {
	const initialState = () => {
		state = {
			shoppingList: [],
			message: ''
		};
	};

	const [ state, dispatch ] = useReducer(shoppingReducer, initialState);

	const setShoppingList = (data) => {
		dispatch({
			type: SET_SHOPPINGLIST,
			payload: data
		});
	};

	return (
		<ShoppingContext.Provider
			value={{
				shoppingList: state.shoppingList,
				message: state.message,
				setShoppingList
			}}
		>
			{props.children}
		</ShoppingContext.Provider>
	);
};

export default shoppingState;

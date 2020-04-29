import React, { useReducer } from 'react';
import ShoppingContext from './shoppingContext';

const shoppingState = (props) => {
	const initialState = () => {
		state = {
			shoppingList: [],
			message: ''
		};
	};

	const [ state, dispatch ] = useReducer(shoppingReducer, initialState);

	return (
		<ShoppingContext.Provider
			value={{
				shoppingList: state.shoppingList,
				message: state.message
			}}
		>
			{props.children}
		</ShoppingContext.Provider>
	);
};

export default shoppingState;

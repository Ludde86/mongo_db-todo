import { GET_SHOPPINGLIST, ADD_SHOPPINGITEM } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_SHOPPINGLIST:
			return {
				...state,
				shoppingList: action.payload
			};
		case ADD_SHOPPINGITEM:
			return {
				...state,
				shoppingList: [ ...state, action.payload ]
			};
		default:
			return state;
	}
};

import { GET_SHOPPINGLIST } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_SHOPPINGLIST:
			return {
				...state,
				shoppingList: action.payload
			};
		default:
			return state;
	}
};

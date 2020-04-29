import { SET_SHOPPINGLIST } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_SHOPPINGLIST:
			return {
				...state,
				shoppingList: [ ...state, action.payload ]
			};
		default:
			return state;
	}
};

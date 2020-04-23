import { GET_DATA, SET_INTERVAL } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				todos: action.payload
				// set all data from fetch getData into state array
			};
		case SET_INTERVAL:
			return {
				...state,
				intervalIsSet: action.payload
			};
		default:
			return state;
	}
};

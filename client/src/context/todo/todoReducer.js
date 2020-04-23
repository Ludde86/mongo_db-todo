import { GET_DATA, SET_INTERVAL, SET_MESSAGE } from '../types';

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
		case SET_MESSAGE:
			return {
				...state,
				message: action.payload
			};
		default:
			return state;
	}
};

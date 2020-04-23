import { GET_DATA } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				todos: action.payload
				// get all data from
			};
		default:
			return state;
	}
};

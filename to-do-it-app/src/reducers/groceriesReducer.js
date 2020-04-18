import {LOAD_GROCERIES, ADD_GROCERY, TOGGLE_GROCERY, DELETE_GROCERY} from '../actions/actionTypes'

function groceriesReducer(state = [], action)
{
	switch(action.type) {
		case LOAD_GROCERIES:
			return action.groceries;

		case ADD_GROCERY:
			return [
				...state,
				{
						id: action.id,
						title: action.title,
						done: false
				}
			];

		case TOGGLE_GROCERY:
			return state.map(grocery => (grocery.id === action.index)
				? {...grocery, done: !grocery.done}
				: grocery
				);

		case DELETE_GROCERY:
			return state.filter(grocery => grocery.id !== action.index);

		default:
			return state;
	}
}

export default groceriesReducer
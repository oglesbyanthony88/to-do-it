import {LOAD_NOTES, ADD_NOTE, DELETE_NOTE} from '../actions/actionTypes'

function notesReducer(state = [], action)
{
	switch(action.type) {
		case LOAD_NOTES:
			return action.notes;

		case ADD_NOTE:
			return [
				...state,
				{
						id: action.id,
						title: action.title,
						content: action.content,
						done: false
				}
			];

		case DELETE_NOTE:
			return state.filter(note => note.id !== action.index);

		default:
			return state;
	}
}

export default notesReducer

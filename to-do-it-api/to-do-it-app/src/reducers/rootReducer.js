import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import notesReducer from './notesReducer'

const rootReducer = combineReducers({
	todos: todosReducer,
	notes: notesReducer
});

export default rootReducer;
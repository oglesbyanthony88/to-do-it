import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import notesReducer from './notesReducer'
import groceriesReducer from './groceriesReducer'

const rootReducer = combineReducers({
	todos: todosReducer,
	notes: notesReducer,
	groceries: groceriesReducer
});

export default rootReducer;
import {LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, LOAD_NOTES, ADD_NOTE, DELETE_NOTE, LOAD_GROCERIES, ADD_GROCERY, TOGGLE_GROCERY, DELETE_GROCERY} from '../actions/actionTypes'

export function loadTodos(todos) {
	return { type: LOAD_TODOS, todos: todos}
}

export function addTodo(id, title) {
	return { type: ADD_TODO, id: id, title: title}
}

export function toggleTodo(index) {
	return { type: TOGGLE_TODO, index: index}
}

export function deleteTodo(index) {
	return { type: DELETE_TODO, index: index}
}

export function loadNotes(notes) {
	return { type: LOAD_NOTES, notes: notes}
}

export function addNote(id, title, content) {
	return { type: ADD_NOTE, id: id, title: title, content: content}
}

export function deleteNote(index) {
	return { type: DELETE_NOTE, index: index}
}

export function loadGroceries(groceries) {
	return { type: LOAD_GROCERIES, groceries: groceries}
}

export function addGrocery(id, title) {
	return { type: ADD_GROCERY, id: id, title: title}
}

export function toggleGrocery(index) {
	return { type: TOGGLE_GROCERY, index: index}
}

export function deleteGrocery(index) {
	return { type: DELETE_GROCERY, index: index}
}
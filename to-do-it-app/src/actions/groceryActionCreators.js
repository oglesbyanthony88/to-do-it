import {LOAD_GROCERIES, ADD_GROCERY, TOGGLE_GROCERY, DELETE_GROCERY} from '../actions/actionTypes'

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
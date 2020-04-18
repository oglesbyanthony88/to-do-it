import {LOAD_NOTES, ADD_NOTE, DELETE_NOTE} from '../actions/actionTypes'

export function loadNotes(notes) {
	return { type: LOAD_NOTES, notes: notes}
}

export function addNote(id, title, content) {
	return { type: ADD_NOTE, id: id, title: title, content: content}
}

export function deleteNote(index) {
	return { type: DELETE_NOTE, index: index}
}

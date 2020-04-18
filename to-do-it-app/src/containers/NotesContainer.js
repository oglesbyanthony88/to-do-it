import React, {Component} from 'react'
import NoteHeader from '../components/notes/NoteHeader'
import NoteInput from '../components/notes/NoteInput'
import NoteList from '../components/notes/NoteList'

class NotesContainer extends Component {
	render() {
		return (
				<div className="container">
					<NoteHeader />
					<NoteInput />
					<NoteList />
				</div>
			)
	}
}


export default NotesContainer
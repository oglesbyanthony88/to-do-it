import React, {Component} from 'react'
import NoteHeader from '../components/NoteHeader'
import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'

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
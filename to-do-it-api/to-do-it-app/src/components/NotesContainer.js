import React, {Component} from 'react'

class NotesContainer extends Component {
	render() {
		return (
				<div>
					<div className="NotesnputContainer">
						<input className="noteTitleInput" type="text"
						placeholder="Notes Title" maxLength="50" />
						<input className="noteContentInput" type="text"
						placeholder="Add Notes Here" />
					</div>
					<div className="NotesListWrapper">
						<ul className="notesList">
						</ul>
					</div>
				</div>
			)
	}
}

export default NotesContainer
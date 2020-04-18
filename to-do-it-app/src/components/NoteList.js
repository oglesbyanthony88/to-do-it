import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loadNotes, deleteNote} from '../actions/noteActionCreators'


class NoteList extends Component {

	getNotes() {
		axios.get('/api/notes')
		.then(response => {
			this.props.dispatch(loadNotes(response.data));
		})
		.catch(error => console.log(error))
	}

	

	deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
    .then(response => {
      this.props.dispatch(deleteNote(id))
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
  	this.getNotes();
  }

	render() {
		return(
			<div className="listWrapper">
				<ul className="notesList">
					{this.props.notes.map((note) => {
						return(
							<li className="note" key={note.id} id={note.id}>
							<label className="noteLabel"><strong>Title:</strong> {note.title}</label>
							<p className="noteContent">{note.content}</p>
							<p className="noteDate" ><strong>Created:</strong> {note.created_at}</p>
							<span className="deleteTaskBtn" onClick={(e) => this.deleteNote(note.id)}>
							x
							</span>
							</li>
						)
					})}
				</ul>
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps)(NoteList)
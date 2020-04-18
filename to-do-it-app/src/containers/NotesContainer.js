import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loadNotes, addNote, deleteNote} from '../actions/noteActionCreators'

class NotesContainer extends Component {

	getNotes() {
		axios.get('/api/notes')
		.then(response => {
			this.props.dispatch(loadNotes(response.data));
		})
		.catch(error => console.log(error))
	}

	createNote = (e) => {
		if (e.key === 'Enter' && !(this.getTitle.value === '')) {
			axios.post('/api/notes', {note: {title: this.getTitle.value, content: this.getVal.value}})
			.then(response => {
				this.props.dispatch(addNote(response.data.id, response.data.title, response.data.content))
				this.getTitle.value = '';
				this.getVal.value = '';
			})
			.catch(error => console.log(error))
		}
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
		return (
				<div className="container">
				<h1>Notes</h1>
					<div className="inputContainer">
						<input className="noteTitleInput" type="text"
						placeholder="Notes Title" maxLength="50"
						ref={(input)=>this.getTitle = input} />
						<input className="noteContentInput" type="text"
						placeholder="Add Notes Here"
						onKeyPress={this.createNote} ref={(input)=>this.getVal = input} />
					</div>
					<div className="listWrapper">
						<ul className="notesList">
						{this.props.notes.map((note) => {
							return(
									<li className="note" key={note.id} id={note.id}>
									<label className="noteLabel">{note.title}</label>
									<p className="noteContent">{note.content}</p>
									<p className="noteDate" >{note.created_at}</p>
									<span className="deleteTaskBtn" onClick={(e) => this.deleteNote(note.id)}>
									x
									</span>
									</li>
							)
						})}
						</ul>
					</div>
				</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps)(NotesContainer)
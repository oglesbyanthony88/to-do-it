import React, {Component} from 'react'
import axios from 'axios'
import {addNote} from '../../actions/noteActionCreators'
import {connect} from 'react-redux'

class NoteInput extends Component {

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

	render() {
		return(
				<div className="inputContainer">
					<input className="noteTitleInput" type="text"
						placeholder="Notes Title" maxLength="50"
						ref={(input)=>this.getTitle = input} />
					<input className="noteContentInput" type="text"
						placeholder="Add Notes Here"
						onKeyPress={this.createNote} ref={(input)=>this.getVal = input} />
				</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps)(NoteInput)




import React, { Component } from 'react'
import axios from 'axios'
import { addTodo } from '../actions/todoActionCreators'
import {connect} from 'react-redux'


class TodoInput extends Component {
	render() {
		return(
				<div className="inputContainer">

					<input className="taskInput" type="text"
						placeholder="Add a Task" maxLength="50"
						onKeyPress={this.createTodo}
						ref={(input)=>this.getTitle = input} />
				</div>
		)
	}

	createTodo = (e) => {
		if (e.key === 'Enter') {
			axios.post('/api/todos', {todo: {title: e.target.value}})
			.then(response => {
				this.props.dispatch(addTodo(response.data.id, response.data.title))
				this.getTitle.value = '';
				})
			.catch(error => console.log(error))
		}
	}
}
	

const mapStateToProps = (state) => {
	return {
		todos: state.todos
		}
	}

export default connect(mapStateToProps)(TodoInput)

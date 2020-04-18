import React, { Component } from 'react'
import axios from 'axios'
import {loadTodos, toggleTodo, deleteTodo} from '../../actions/todoActionCreators'
import {connect} from 'react-redux'

class TodoList extends Component {

	getTodos() {
		axios.get('/api/todos')
		.then(response => {
			this.props.dispatch(loadTodos(response.data));
		})
		.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getTodos();
	}

	render(){
		return(
			<div className="listWrapper">
				<ul className="taskList">
					{this.props.todos.map((todo) => {
						return(
							<li className="task" key={todo.id} id={todo.id}>
									<input className="taskCheckbox" type="checkbox"
										checked={todo.done}
										onChange={(e) => this.updateTodo(e, todo.id)} />
									<label className="taskLabel">{todo.title}</label>
									<span className="deleteTaskBtn"
										onClick={(e) => this.deleteTodo(todo.id)}>x</span>
							</li>
						)
					})}
				</ul>
			</div>
			)
	}

		updateTodo = (e, id) => {
		axios.put(`/api/todos/${id}`, {todo: {done: e.target.checked}})
		.then(response => {
			this.props.dispatch(toggleTodo(id))
		})
		.catch(error => console.log(error))
	}

	deleteTodo = (id) => {
		axios.delete(`/api/todos/${id}`)
		.then(response => {
			this.props.dispatch(deleteTodo(id))
		})
		.catch(error => console.log(error))
	}

}
	const mapStateToProps = (state) => {
	return {
		todos: state.todos
		}
	}

export default connect(mapStateToProps)(TodoList)
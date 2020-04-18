import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loadTodos, addTodo, toggleTodo, deleteTodo} from '../actions/todoActionCreators'
import TodoHeader from '../components/TodoHeader'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

class TodosContainer extends Component {

	render() {
		return (
				<div className="container">
				<TodoHeader />
				<TodoInput />
				<TodoList />	
				</div>
			)
	}
}

export default TodosContainer
import React, {Component} from 'react'
import TodoHeader from '../components/todo/TodoHeader'
import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'

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
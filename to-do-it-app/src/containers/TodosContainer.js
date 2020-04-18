import React, {Component} from 'react'
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
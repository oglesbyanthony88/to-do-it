import React, {Component} from 'react'

class TodosContainer extends Component {
	render() {
		return (
				<div>
					<div className="inputContainer">
						<input className="taskInput" type="text"
							placeholder="Add a Task" maxLength="50" />
					</div>
					<div className="listWrapper">
						<ul className="taskList">
						</ul>
					</div>
				</div>
			)
	}
}

export default TodosContainer
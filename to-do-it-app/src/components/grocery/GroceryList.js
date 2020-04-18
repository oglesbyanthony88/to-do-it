import React, { Component } from 'react'
import axios from 'axios'
import {loadGroceries, toggleGrocery, deleteGrocery} from '../../actions/groceryActionCreators'
import {connect} from 'react-redux'

class GroceryList extends Component {
			componentDidMount() {
			this.getGroceries();
		}

		getGroceries() {
			axios.get('/api/groceries')
			.then(response => {
				this.props.dispatch(loadGroceries(response.data))
			})
			.catch(error => console.log(error))
		}

		updateGrocery = (e, id) => {
			axios.put(`/api/groceries/${id}`, {grocery: {done: e.target.checked}})
			.then(response => {
				this.props.dispatch(toggleGrocery(id))
			})
			.catch(error => console.log(error))
		}

		deleteGrocery = (id) => {
			axios.delete(`/api/groceries/${id}`)
			.then(response => {
				this.props.dispatch(deleteGrocery(id))
			})
			.catch(error => console.log(error))
		}

		render() {
			return(
				<div className="listWrapper">
	   		<ul className="groceryList">
	   			{this.props.groceries.map((grocery) => {
	   				return(
	   						<li className="grocery" key={grocery.id} id={grocery.id}>
	   							<input className="taskCheckbox" type="checkbox"
	   							checked={grocery.done} onChange={(e)=>this.updateGrocery(e, grocery.id)} />
	   							<label className="taskLabel">{grocery.title}</label>
	   							<span className="deleteTaskBtn" onClick={(e) => this.deleteGrocery(grocery.id)}>
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

const mapStateToProps = (state) => {
	return {
		groceries: state.groceries
	}
}

export default connect(mapStateToProps)(GroceryList)




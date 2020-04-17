import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loadGroceries, addGrocery, toggleGrocery, deleteGrocery} from '../actions/actionCreators'


class GroceriesContainer extends Component {

		getGroceries() {
			axios.get('/api/v1/groceries')
			.then(response => {
				this.props.dispatch(loadGroceries(response.data))
			})
			.catch(error => console.log(error))
		}

		createGrocery = (e) => {
			if (e.key === 'Enter' && !(this.getTitle.value === '')) {
				axios.post('api/v1/groceries', {grocery: {title: this.getTitle.value}})
				.then(response => {
					this.props.dispatch(addGrocery(response.data.id, response.data.title))
					this.getTitle.value = '';
				})
				.catch(error => console.log(error))
			}
		}

		updateGrocery = (e, id) => {
			axios.put(`/api/v1/groceries/${id}`, {grocery: {done: e.target.checked}})
			.then(response => {
				this.props.dispatch(toggleGrocery(id))
			})
			.catch(error => console.log(error))
		}

		deleteGrocery = (id) => {
			axios.delete(`/api/v1/groceries/${id}`)
			.then(response => {
				this.props.dispatch(deleteGrocery(id))
			})
			.catch(error => console.log(error))
		}

		componentDidMount() {
			this.getGroceries();
		}

	render() {
    return (
    <div className="container">
    <h1>Grocery List</h1>
			<div className="inputContainer">
	  		<input className="groceryInput" type="text" 
	    	placeholder="Add an item" maxLength="50"
	    	onKeyPress={this.createGrocery} ref={(input)=>this.getTitle = input} />
			</div>  	    
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
     </div>    
    )
  }
}

const mapStateToProps = (state) => {
	return {
		groceries: state.groceries
	}
}

export default connect(mapStateToProps)(GroceriesContainer)
import React, { Component } from 'react'
import axios from 'axios'
import { addGrocery } from '../../actions/groceryActionCreators'
import {connect} from 'react-redux'


class GroceryInput extends Component {

	createGrocery = (e) => {
			if (e.key === 'Enter' && !(this.getTitle.value === '')) {
				axios.post('/api/groceries', {grocery: {title: this.getTitle.value}})
				.then(response => {
					this.props.dispatch(addGrocery(response.data.id, response.data.title))
					this.getTitle.value = '';
				})
				.catch(error => console.log(error))
			}
		}

	render() {
		return(
			<div className="inputContainer">
				<input className="groceryInput" type="text" 
	  			placeholder="Add an item" maxLength="50"
	  			onKeyPress={this.createGrocery} ref={(input)=>this.getTitle = input} />
			</div> 
		)
	}
}

const mapStateToProps = (state) => {
	return {
		groceries: state.groceries
	}
}

export default connect(mapStateToProps)(GroceryInput)

import React, {Component} from 'react'
import GroceryHeader from '../components/grocery/GroceryHeader'
import GroceryInput from '../components/grocery/GroceryInput'
import GroceryList from '../components/grocery/GroceryList'

class GroceriesContainer extends Component {



	render() {
    return (
    <div className="container">
    <GroceryHeader />
		<GroceryInput />	    
		<GroceryList />
    </div>    
    )
  }
}

export default GroceriesContainer
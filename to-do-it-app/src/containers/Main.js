import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import GroceriesContainer from '../containers/GroceriesContainer'
import TodosContainer from '../containers/TodosContainer'
import NotesContainer from '../containers/NotesContainer'

class Main extends Component {
	render() {
		return(
				<div>
					<Header />
					<NavBar />

						<div>
							<Route exact path='/groceries' component={GroceriesContainer} />
							<Route exact path='/todos' component={TodosContainer} />
							<Route exact path='/notes' component={NotesContainer} />
						</div>

				</div>
			)
	}
}

export default Main;
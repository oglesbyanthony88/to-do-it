import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../components/main/NavBar'
import Header from '../components/main/Header'
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
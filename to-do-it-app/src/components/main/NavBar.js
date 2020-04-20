import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
	return (
			<div className="navbar">
				<NavLink to="/groceries"
					exact
					activeStyle={{
						color: 'red'
					}}>Grocery List
				</NavLink>
				|
				<NavLink to="/todos"
					exact
					activeStyle={{
						color: 'red'
					}}>To Do List
				</NavLink>
				|
				<NavLink to="/notes"
					exact
					activeStyle={{
						color: 'red'
					}}>Notes
				</NavLink>
			</div>
		)
}

export default NavBar;
import React, { Component } from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer'
import NotesContainer from './components/NotesContainer'
import GroceriesContainer from './components/GroceriesContainer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { isEmptyState: true}
  }

  triggerShowTodoList = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isShowTodoListState: true,
      isShowGroceries: false,
      isShowNotes: false
    })
  }

  triggerShowNotes = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isShowTodoListState: false,
      isShowGroceries: false,
      isShowNotes: true
    })
  }

  triggerShowGroceries = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isShowTodoListState: false,
      isShowNotes: false,
      isShowGroceries: true
    })
  }

  render() {
  if (this.state.isEmptyState){
      return (
        <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        <button onClick={this.triggerShowGroceries}>Grocery List</button>
        </div>
        )
      }
  if (this.state.isShowTodoListState){
    return (
      <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        <button onClick={this.triggerShowGroceries}>Grocery List</button>
        <TodosContainer />
      </div>
     
      )
    }
  if (this.state.isShowNotes){
    return (
      <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        <button onClick={this.triggerShowGroceries}>Grocery List</button>
        <NotesContainer />
      </div>
      )
  }
  if (this.state.isShowGroceries){
    return (
      <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        <button onClick={this.triggerShowGroceries}>Grocery List</button>
        <GroceriesContainer />
      </div>
      )
  }
  }
  }



export default App;

import React, { Component } from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer'
import NotesContainer from './components/NotesContainer'

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
      isShowNotes: false
    })
  }

  triggerShowNotes = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isShowTodoListState: false,
      isShowNotes: true
    })
  }

  render() {
  if (this.state.isEmptyState){
      return (
        <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        </div>
        )
      }
  if (this.state.isShowTodoListState){
    return (
      <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        <TodosContainer />
      </div>
     
      )
    }
  if (this.state.isShowNotes){
    return (
      <div className="nav">
        <button onClick={this.triggerShowTodoList}>To Do List</button>
        <button onClick={this.triggerShowNotes}>Notes</button>
        <NotesContainer />
      </div>
      )
  }
  }
  }



export default App;

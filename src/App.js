import './App.css';
import Navbar from './components/Navbar';
import TodosList from './components/TodosList';
import {Component} from "react";
import todosData from './Data/todosData';

class App extends Component{
  state = {
    todosData: todosData,
    todotaskName: '',
    todoDescription: '',
    todoFinished: '',
    isCompleted: false,
    Text: "",
    createdAt: ''
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value})
}
handleSubmit = (event) => {
  event.preventDefault()

  const newtodo = {
    taskName: this.state.todotaskName,
    Finished: this.state.todoFinished,
    description: this.state.todoDescription
  }
  console.log(newtodo);
  this.setState({
    todosData: [newtodo, ...this.state.todosData],
    todotaskName: '',
    todoDescription: '',
    todoFinished: '',
    isCompleted: false,
    Text: '',
    createdAt: ''
  })
}
  render(){
    return(
<div className='App'>
<Navbar/>

<form onSubmit = {this.handleSubmit}>
        
        <label htmlFor="todotaskName">Task</label>
        <input type="text" value={this.state.todotaskName} onChange={this.handleChange} id="todotaskName"/>
    
        <label htmlFor="todoDescription">Task Description</label>
        <input type="text" value={this.state.todoDescription} onChange={this.handleChange} id="todoDescription"/>

        <label htmlFor="todofinished">Task Finished</label>
        <input type="text" value={this.state.todoFinished} onChange={this.handleChange} id="todofinished"/>
        <input type='submit'/>
      </form>
     
<TodosList todos ={this.state.todosData}/>



</div>
    );
  }

  }

export default App;

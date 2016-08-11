import React from 'react';
import CreateToDo from './create-todo';
import ToDosList from './todos-list';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: true
  },
  {
    task: 'pet Roscoe',
    isCompleted: false
  }
]
export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      todos
    }
  }
  render(){
    return (
      <div>
        <h1>React To Dos</h1>
        <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <ToDosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    );
  }

  toggleTask(task) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === task)
      foundTodo.isCompleted = !foundTodo.isCompleted
      this.setState({ todos: this.state.todos })
  }

  createTask(task){
    this.state.todos.push({
      task, //es6 = task: task
      isCompleted: false
    })
    this.setState({ todos: this.state.todos })
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)

    foundTodo.task = newTask
    this.setState({ todos: this.state.todos })
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete)
    this.setState({ todos: this.state.todos })
  }
}

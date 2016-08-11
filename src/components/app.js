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
    isCompleted: true
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
        <CreateToDo />
        <ToDosList
          todos={this.state.todos}
          createTask={this.createTask.bind()}
          />
      </div>
    );
  }

  createTask(task){

  }

}

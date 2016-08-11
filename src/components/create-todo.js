import React from 'react';

export default class ToDosList extends React.Component{

  render(){
    console.log(this.props.todos);
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What Do?! derp dirka" ref="createInput" />
        <button >Create</button>
      </form>
    );
  }
  handleCreate(event){
    event.preventDefault();

    console.log(this.refs.createInput.value);
  }
}

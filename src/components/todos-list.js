import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './todos-list-header';
import ToDosListItem from './todos-list-item';

export default class ToDosList extends React.Component{
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <ToDosListItem key={index}
   {...todo} />);
}

  render(){
    console.log(this.props.todos);
    return (
      <table>
        <ToDosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

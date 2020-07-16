import React, { Component } from 'react';
import Child from './Child'


class Todos extends Component {
  toggle = (id) => {
    console.log('this actually works', id)
    this.props.dispatch({ type: "TOGGLE_TODO", payload: id})
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <p key={todo.id}>{todo.name} <input type="checkbox" onChange={()=>this.toggle(todo.id)}/></p>
        ))}
      </div>
    );
  }
}

export default Todos;



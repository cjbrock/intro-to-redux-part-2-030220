import React, { Component } from 'react';
import Todos from './Todos'
import {connect} from 'react-redux'

class CompleteTodos extends Component {
  render() {
    return (
      <div>
        <h2>Completed Todos</h2>
        <Todos todos={this.props.completed} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    completed: state.filter(todo => todo.complete)
  }
}

export default connect(mapStateToProps)(CompleteTodos);
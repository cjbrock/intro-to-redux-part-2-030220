import React, { Component } from 'react';
import {connect} from 'react-redux'
import Todos from "./Todos"


class IncompleteTodos extends Component {
  render() {
    return (
      <div>
        <h2>Incomplete Todos</h2>
        <Todos todos={this.props.incomplete} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    incomplete: state.filter(s => !s.complete)
  }
}


export default connect(mapStateToProps)(IncompleteTodos);
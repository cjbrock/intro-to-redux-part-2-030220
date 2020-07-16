import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grandchild from './Grandchild'



class Child extends Component {
  render() {
    return (
      <div>
        <p>{this.props.firstTask.name}</p>
        <p>{this.props.lastTask.name}</p>
        <Grandchild todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    firstTask: state[0],
    lastTask: state[6]
  }
}

export default connect(mapStateToProps)(Child);
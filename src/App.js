import React, { Component} from 'react';
import logo from './logo.svg';
import CompleteTodos from './CompleteTodos'
import IncompleteTodos from './IncompleteTodos'
import Navbar from './Navbar'
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar  />
        <CompleteTodos />
        <IncompleteTodos />
      </div>
    );
  }
}

export default App;

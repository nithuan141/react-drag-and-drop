import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
      </div>
    );
  }
}

export default App;

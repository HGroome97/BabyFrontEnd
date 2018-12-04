import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table ip = "localhost:8081"/>
      </div>
    );
  }
}

export default App;

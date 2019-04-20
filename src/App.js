import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TopPart } from './components/TopPart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopPart />
      </div>
    );
  }
}

export default App;

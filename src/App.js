import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';
export default class App extends Component {
  
  render() {
    return (
      <div className="container-fluid app">
        <Counter />
      </div>
    )
  }
}

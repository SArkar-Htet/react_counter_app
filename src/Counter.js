import React, { Component } from 'react';
import Alert from './Alert';
import './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      counter : 0,
      error : '',
    }
  }

  increase = () => {
    if (this.state.counter < 10) {
      this.setState((state) => ({
        counter : state.counter + 1,
        error : '',
      }));
    } else {
      this.setState((state) => ({
        error : 'Cannot increase greater than 10!',
      }));
    }
  }

  decrease = () => {
    if (this.state.counter > 0) {
      this.setState((state) => ({
        counter : state.counter - 1,
        error : '',
      }));
    } else {
      this.setState((state) => ({
        error : 'Cannot decrease less than 0!',
      }));
    }
  }

  reset = () => {
    this.setState((state) => ({
      counter : 0,
    }));
  }
  
  render() {
    return (
      <div className="Counter-box">
        <h2 className="Counter-header">Counter App</h2>
        <h4 className="Counter-counter my-4">{this.state.counter}</h4>
        <div className="Counter-button">
          <button type="button" className="btn btn-primary mx-2" onClick={this.increase}>Increase</button>
          <button type="button" className="btn btn-danger mx-2" onClick={this.decrease}>Decrease</button>
          <button type="button" className="btn btn-secondary mx-2" onClick={this.reset}>Reset</button>
        </div>
        
        <Alert error={this.state.error} />
        
      </div>
    )
  }
}

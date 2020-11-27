import React, { Component } from 'react';
import CounterButton from './CounterButton';
import Alert from './Alert';
import './Counter.css';

export default class Counter extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      counter : 0,
      alert : '',
    }
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  
  onIncrease() {
    const {counter} = this.state;
    counter < 10 ?
      this.setState((state) => ({
        counter : state.counter + 1,
        alert : '',
      })) 
    :
      this.setState({
        alert : "Can't increase greater than 10!",
      });
  }

  onDecrease() {
    const {counter} = this.state;
    counter > 0 ?
      this.setState((state) => ({
        counter : state.counter - 1,
        alert : '',
      }))
    : 
      this.setState({
        alert : "Can't decrease less than 0!",
      });
  }

  onReset() {
    this.setState({
      counter : 0,
      alert : '',
    });
  }
  
  render() {
    const {counter, alert} = this.state;
    return (
      <div className="counter">
        <h2 className="counter-header">Counter App</h2>
        <h4 className="counter-count my-4">{counter}</h4>
        <CounterButton onIncrease={this.onIncrease} onDecrease={this.onDecrease} onReset={this.onReset} />
        <Alert alert={alert}/>
      </div>
    )
  }
}

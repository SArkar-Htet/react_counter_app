import React, { Component } from 'react'

export default class CounterButton extends Component {
  render() {
    const {onIncrease, onDecrease, onReset} = this.props;
    return (
      <div className="counter-button">
        <button type="button" className="btn btn-primary mx-2" onClick={onIncrease}>Increase</button>
        <button type="button" className="btn btn-danger mx-2" onClick={onDecrease}>Decrease</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={onReset}>Reset</button>
      </div>
    )
  }
}

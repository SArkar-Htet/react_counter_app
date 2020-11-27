import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    const {alert} = this.props;
    if (alert.length <= 0) {
      return null;
    };
    return(
      <div className="alert">
        <div className="alert alert-danger my-3" role="alert">
          {alert}
        </div>
      </div>
    )
  }
}

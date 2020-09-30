import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    const {error} = this.props;
    if (error.length <= 0) {
      return (
        null
      )
    }
    return (
      <div>
        <div class="alert alert-danger my-3" role="alert">
          {error}
        </div>
      </div>
    )
  }
}

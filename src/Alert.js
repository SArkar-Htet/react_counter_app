import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error.length > 0 && 
          <div class="alert alert-danger my-3" role="alert">
            {error}
          </div>
        }
      </div>
    )
  }
}

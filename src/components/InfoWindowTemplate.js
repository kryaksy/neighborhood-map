import React, { Component } from 'react'

class InfoWindowTemplate extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.place.venue.name}</h2>
        <p>{this.props.place.venue.location.address}</p>
      </div>
    )
  }
}

export default InfoWindowTemplate
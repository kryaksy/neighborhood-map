import React, { Component } from 'react'
import * as FourSquareAPI from './../FourSquareAPI'

class InfoWindowTemplate extends Component {

  state = {
    imageURL: ''
  }

  componentWillMount() {
    FourSquareAPI.getPhoto(this.props.place.venue.id).then(url =>
      (url !== "" && url!==undefined) &&
        this.setState({
          imageURL: url
        }))
  }

  render() {
    return (
      <div style={{ width: 300, textAlign: "center"}}>
        <h2>{this.props.place.venue.name}</h2>
        <div className="place-photo" style={{ width: 300, height: 300, backgroundImage: `url(${this.state.imageURL})` }}></div>
        <p style={{textAlign: "center"}}>{this.props.place.venue.location.address}</p>
      </div>
    )
  }
}

export default InfoWindowTemplate
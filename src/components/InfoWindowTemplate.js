import React, { Component } from 'react'
import * as FourSquareAPI from './../FourSquareAPI'

class InfoWindowTemplate extends Component {

  state = {
    imageURL: ''
  }

  componentWillMount() {
    FourSquareAPI.getPhoto(this.props.place.venue.id)
      .then(url => (url !== "" && url!==undefined) &&
          this.setState({
            imageURL: url
          })
      )
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div style={{ width: 300, textAlign: "center"}} id="infoWindow" aria-label="Info window" tabIndex={0}>

        <h2 tabIndex={0}>{this.props.place.venue.name}</h2>
        <img src={this.state.imageURL} alt={'best photo from ' + this.props.place.venue.name} tabIndex={0} aria-label="photo from the place"/>
        <p style={{textAlign: "center"}} tabIndex={0}>{this.props.place.venue.location.address}</p>

        <span className= "credit-text">
          <a href="https://developer.foursquare.com/" target="/blank"> Foursquare API</a> used
        </span>
      </div>
    )
  }
}

export default InfoWindowTemplate
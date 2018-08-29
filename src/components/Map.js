import React, { Component } from 'react';
import MapComposite from './MapComposite'

class Map extends Component {

  render() {
    return (
      <div>
        <MapComposite places={this.props.places}
                      center={this.props.center}
                      openedMarker={this.props.openedMarker}
                      zoom={this.props.zoom}
                      handleMarkerClick={this.props.handleMarkerClick}
                      closeInfoWindow={this.props.closeInfoWindow}
                      icon={this.props.icon}/>
      </div>
    );
  }
}

export default Map;

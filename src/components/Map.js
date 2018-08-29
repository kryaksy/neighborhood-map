import React, { Component } from 'react';
import MapComposite from './MapComposite'

class Map extends Component {

  render() {
    return (
      <div role="application" tabIndex={0} aria-label="google maps">
        <MapComposite places={this.props.places}
                      center={this.props.center}
                      openedMarker={this.props.openedMarker}
                      zoom={this.props.zoom}
                      handleMarkerClick={this.props.handleMarkerClick}
                      closeInfoWindow={this.props.closeInfoWindow}
                      iconSelected={this.props.iconSelected}
                      defaultIcon={this.props.defaultIcon}/>
      </div>
    );
  }
}

export default Map;

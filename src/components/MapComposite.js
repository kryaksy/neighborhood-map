import React from 'react'
import { compose, withProps} from "recompose"
import { withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
import InfoWindowTemplate from './InfoWindowTemplate';

const MapComposite = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBUbuB1PFaRRKej28i7wS6BWjJ1-krm72M",
      loadingElement: <div style={{ height: `100vh` }} />,
      containerElement: <div style={{ height: `93vh`, width: '100vw' }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withGoogleMap
    )(props => {
      return (
        <GoogleMap center={props.center}
                   zoom={props.zoom}>
          {(props.places) && (
            props.places.map(place => (
              <Marker key={place.venue.id}
                      position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }}
                      onClick={e => props.handleMarkerClick(e, { lat: place.venue.location.lat , lng: place.venue.location.lng}, place.venue.id)}
                      icon={place.venue.id === props.openedMarker ? props.icon : undefined}>
                {props.openedMarker===place.venue.id && (
                  <InfoWindow onCloseClick={props.closeInfoWindow}>
                    <InfoWindowTemplate place={place} />
                  </InfoWindow>
                )}
              </Marker>
          )))}
        </GoogleMap>
    )}
)

export default MapComposite
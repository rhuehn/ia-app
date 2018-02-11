import React from 'react';
import {getGoogleKey, Map, Marker, GoogleApiComponent} from '../external'

class _MapContainer extends React.Component {
    render () {
        return (
            <div>
                <Map google={this.props.google}>
                    {/*{this.props.markers.map(marker =>*/}
                        {/*<Marker*/}
                            {/*key={marker.get('title')}*/}
                            {/*title={marker.get('title')}*/}
                            {/*description={marker.get('description')}*/}
                            {/*properties={marker.get('properties')}*/}
                            {/*position={marker.get('position')}*/}
                            {/*mapOn={marker.get('mapOn')}*/}
                            {/*addMarker={this.props.addMarker}*/}
                            {/*onMarkerClick={this.props.onMarkerClick}/>*/}
                    {/*)}*/}
                </Map>
            </div>
        )
    }
}

export const MapContainer = GoogleApiComponent({
    apiKey: getGoogleKey()
})(_MapContainer)

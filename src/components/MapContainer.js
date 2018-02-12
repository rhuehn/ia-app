import React from 'react';
import {getGoogleKey, Map, Marker, GoogleApiComponent} from '../external'
import {connect} from 'react-redux'
import * as mapActions from '../mapActions'

const
    mapState = ({marker}) => ({marker})

const _MapContainer = connect(mapState, mapActions)(class extends React.Component {
    render () {
        return (
            <div>
                <Map google={this.props.google}>
                    {this.props.marker &&
                        <Marker
                            mapOn
                            addMarker={this.props.addMarker}
                            onMarkerClick={this.props.onMarkerClick}
                            {...this.props.marker}
                        />
                    }
                </Map>
            </div>
        )
    }
})

export const MapContainer = GoogleApiComponent({
    apiKey: getGoogleKey()
})(_MapContainer)

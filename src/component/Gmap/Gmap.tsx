import React from 'react';

import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import {defaultTheme} from "./GmapTheme";

const containerStyle = {
    width: '1000px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const defaultOptions = {
    penControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    styles: defaultTheme


}

function MyComponent() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)
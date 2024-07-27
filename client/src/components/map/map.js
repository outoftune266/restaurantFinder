import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl';

// mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKEN';

// const mapContainer = useRef(null);
// const map = useRef(null);
// const [ lng , setLng ] = useState(-70.9);
// const [ lat, setLat ] = useState(42.35);
// const [ zoom, setZoom ] = useState(9);

// useEffect(() => {
//     if (map.current) return;
//     map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/mapbox/streets-v12',
//         center: [ lng, lat ],
//         zoom: zoom
//     });
// });

export default function Map() {
    return (<div>
        <h1>Map Goes Here</h1>
        {/* <div ref={mapContainer} className="map-container" /> */}
    </div>)
};
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';

export default function Map() {
    mapboxgl.accessToken = "pk.eyJ1Ijoib3V0b2Z0dW5lMjY2IiwiYSI6ImNraGF4NnhwZDBrZjMzMms0c2xwejYydmEifQ.CsvsPCXbKiZI9P_psvhAgw";
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [ lng , setLng ] = useState(-86.78);
    const [ lat, setLat ] = useState(36.16);
    const [ zoom, setZoom ] = useState(10.5);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [ lng, lat ],
            zoom: zoom
    });
});
    return (<div>
        <div ref={mapContainer} className="map-container" />
    </div>)
};
'use client';


// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    url: string
}

export default function Map({ url }: MapProps) {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={5} className="w-2/3 h-[500px] mb-10">
            <TileLayer
                url={url}
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};



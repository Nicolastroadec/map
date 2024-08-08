'use client';


// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface mapProps {
    url: string
}

export default function Map({ url }: mapProps) {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={5} className="w-full h-[500px] mb-10">
            <TileLayer
                url={url}
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};



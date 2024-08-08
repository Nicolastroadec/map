'use client';


// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Suspense } from 'react';


interface MiniMapProps {
    url: string
}

export default function MiniMap({ url }: MiniMapProps) {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={5} className="w-[400px] h-[200px] mb-10 flex-grow-0 flex-shrink-0 basis-1/5">
            <TileLayer
                url={url}
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};



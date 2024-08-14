'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { MapsDetails } from '@/app/lib/data';



export default function Map({ url }: MapsDetails) {
    return <MapContainer center={[48.8566, 2.3522]} zoom={5} className="xl:w-3/5 w-full h-[500px] mb-5 z-0">
        <TileLayer
            url={url ? url : 'No url provided'}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMapAZE</a> contributors'
        />
    </MapContainer>;
};



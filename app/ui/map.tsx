'use client';


// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


interface MapProps {
    url: string
}

export default function Map({ url }: MapProps) {
    // Mémoriser le MapContainer pour éviter la réinitialisation


    return <MapContainer center={[48.8566, 2.3522]} zoom={5} className="w-2/3 h-[500px] mb-10 z-0">
        <TileLayer
            url={url}
        />
    </MapContainer>;
};



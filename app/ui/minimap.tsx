'use client';


// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


interface MiniMapProps {
    url: string,
    cardWidth: number,
}

export default function MiniMap({ url, cardWidth }: MiniMapProps) {



    return <>
        <div className="relative">
            <div className="absolute w-full h-full z-10"></div>
            <MapContainer center={[48.8566, 2.3522]} zoom={5} style={{ width: `${cardWidth}px` }} className=" z-0 h-[150px] flex-grow-0 flex-shrink-0 basis-1/5 minimap-leaflet" >
                <TileLayer
                    url={url}
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer >
        </div >
    </>
};



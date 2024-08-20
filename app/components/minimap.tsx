'use client';


// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


interface MiniMapProps {
    url: string,
    clickOnMap: (index: number) => void,
    index: number,
}

export default function MiniMap({ url, clickOnMap, index }: MiniMapProps) {

    function handleClick(index: number) {
        clickOnMap(index);
    }
    return <>
        <div onClick={() => handleClick(index)} className="relative hover:scale-125 hover:z-30 transition-transform duration-500 hover:cursor-pointer">
            <div className="absolute w-full h-full z-10 bg-black opacity-50 hover:opacity-0 transition-opacity duration-200"></div>
            <MapContainer center={[48.8566, 2.3522]} zoom={5} className=" z-0 h-[120px] sm:h-[150px] minimap-leaflet" >
                <TileLayer
                    url={url}
                />
            </MapContainer >
        </div >
    </>
};



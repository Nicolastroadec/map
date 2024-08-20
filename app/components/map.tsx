'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { MapsDetails } from '@/app/lib/data';

interface MapsDetailsData {
    data: MapsDetails,
}


export default function Map({ data }: MapsDetailsData) {
    const { site, name, license, url } = data;
    const attribution = `&copy; <a href=${site}>${name}</a> ${license}`;
    return <MapContainer center={[48.8566, 2.3522]} zoom={5} className="xl:w-3/5 w-full h-[500px] mb-5 z-0">
        <TileLayer
            url={url ? url : 'No url provided'}
            attribution={attribution} />
    </MapContainer >;
};

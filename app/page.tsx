
import Image from "next/image";
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/app/ui/map'), { ssr: false });

export default function Home() {

  const mapsUrl: string[] = [
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    'https://api.mapbox.com/styles/v1/nicolastroadec/clu10mdy400nu01qwgizt8el8/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmljb2xhc3Ryb2FkZWMiLCJhIjoiY2x1MTBrOTR5MGV5eDJsbjBrdGRrcWNyNyJ9.7m60Z52KxMHCajM-fbksNw',
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
    'https://cartocdn_{s}.global.ssl.fastly.net/base-antique/{z}/{x}/{y}.png',
    'https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png',
    'https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png',
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
    'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
    'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
    'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
    'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
    'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
    'https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
    'https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',

  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {mapsUrl.map((mapUrl, index) => (
        <Map key={index} url={mapUrl} />
      ))}
    </main>
  );
}



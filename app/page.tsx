
'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data';

import Slider from '@/app/ui/slider';
import { CardSkeleton, MapSkeleton } from '@/app/ui/skeletons';

import MapInfos from '@/app/ui/mapInfos';

import { code } from '@/app/lib/code';

import { MapsDetails } from '@/app/lib/data';

const Map = dynamic(() => import('@/app/ui/map'), { loading: () => <MapSkeleton />, ssr: false });

export default function Home() {

  const [opacity, setOpacity] = useState('opacity-0');

  function indexClicked(index: number) {
    const marginTop = 250;
    const rect = mapRefs?.current[index]?.getBoundingClientRect();
    window.scrollTo({
      top: rect?.top ? rect.top + window.scrollY - marginTop : 0,
      behavior: 'smooth',
    });
  }

  function handleClickOnCode(code: string): void {
    setOpacity('opacity-1 ');
    setTimeout(() => (
      setOpacity('opacity-0 ')
    ), 2000);
    navigator.clipboard.writeText(code);
  }

  const mapRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getUrl = (map: MapsDetails): string => {
    return map.urlForCode || map.url || 'No url provided'
  }

  return (
    <main className=" bg-[#0d1321] min-h-screen md:p-24 mt-40">
      <h1 className="text-3xl mb-5">Une liste de cartes utilisables gratuitement, ou avec certaines limites</h1>
      <h2 className="text-xl mb-4">Application propulsée par Next.js, Tailwind et TypeScript 🚀</h2>
      <p className="text-xl mb-4">
        Pour plus d{`'`}informations, rendez-vous sur <a className="underline" href="http://www.nicolastroadec.fr" target="_blank">mon site internet</a>
      </p>        <Slider indexClicked={(index) => indexClicked(index)} />
      {maps.map((map, index) => (
        <div key={index} ref={(el) => { mapRefs.current[index] = el }}>
          <div className="flex xl:flex-row flex-col">
            <Map url={map.url} />
            <MapInfos data={{ name: map.name, license: map.license, maxRequests: map.maxRequests, site: map.site }} />
          </div>
          <div>
            <details className="bg-[#1d2d44] hover:bg-[#3e5c76] border-grey-600 border-solid border-2 rounded-small mb-10 relative">
              <summary className="p-5 cursor-pointer">Voir le code</summary>
              <pre onClick={() => handleClickOnCode(code(getUrl(map)))} className="pl-5 pr-5 pb-5 cursor-pointer mt-5 text-white z-index-0">{code(getUrl(map))}</pre>
              <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl z-index-10 p-2 pl-4 pr-4 bg-gray-800 ${opacity}`}>Copié !</div>
            </details>
          </div>
        </div>
      ))
      }
    </main >
  );
}

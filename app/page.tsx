
'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data';

import Slider from '@/app/ui/slider';
import { CardSkeleton } from '@/app/ui/skeletons';

import MapInfos from '@/app/ui/mapInfos';

import { code } from '@/app/lib/code';

const Map = dynamic(() => import('@/app/ui/map'), { loading: () => <CardSkeleton />, ssr: false });

export default function Home() {
  function indexClicked(index: number) {
    const marginTop = 250;
    const rect = mapRefs?.current[index]?.getBoundingClientRect();
    window.scrollTo({
      top: rect?.top ? rect.top + window.scrollY - marginTop : 0,
      behavior: 'smooth',
    });
  }

  const mapRefs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <main className=" bg-black  min-h-screen p-24 mt-40">
      <Slider indexClicked={(index) => indexClicked(index)} />
      {maps.map((map, index) => (
        <div key={index} ref={(el) => { mapRefs.current[index] = el }}>
          <div className="flex">
            <Map url={map.url} />
            <MapInfos data={{ name: map.name, license: map.license, maxRequests: map.maxRequests }} />
          </div>
          <div>
            <details className="border-grey-100 rounded">
              <summary className="cursor-pointer">Voir le code HTML / JS</summary>
              <pre className="text-white">{code(map.url ? map.url : 'Pas d\'url fournie')}</pre>
            </details>
          </div>
        </div>
      ))
      }
    </main >
  );
}

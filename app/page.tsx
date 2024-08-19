'use client';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import { code } from '@/app/lib/code';
import { MapsDetails } from '@/app/lib/data';

import { maps } from '@/app/lib/data';
import { MapSkeleton } from '@/app/ui/skeletons';

import Footer from '@/app/ui/footer';
import Slider from '@/app/ui/slider';
import MapInfos from '@/app/ui/mapInfos';

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
    <main className=" bg-[#0d1321] min-h-screen md:p-24 pt-20 pl-2 pr-2 mt-40">
      <h1 className="text-3xl mb-5 ">Une liste de cartes utilisables gratuitement, ou avec certaines limites</h1>
      <p className="mb-4">Tous les fonds de carte listés ci-dessous peuvent être utilisés gratuitement. Certains peuvent nécessiter de créer un compte, afin de récupérer une clé API ou bien l{`'`}ID d{`'`}un compte.
        Ces cartes peuvent être utilisées pour y ajouter des markers, des popups, des frontières... Attention à bien lire les conditions d{`'`}utilisation : certaines d{`'`}entre elles ne peuvent pas servir à un usage commercial, et la plupart doivent être utilisées de façon raisonnable.</p>
      <h2 className="text-xl mb-4">Application propulsée par Next.js, Tailwind et TypeScript 🚀</h2>
      <Slider indexClicked={(index) => indexClicked(index)} />
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
      <Footer />

    </main >
  );
}

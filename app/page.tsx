
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data';

import Slider from '@/app/ui/slider';

import { Suspense } from 'react';

import { CardsSkeleton } from '@/app/ui/skeletons';
const Map = dynamic(() => import('@/app/ui/map'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Suspense fallback={<CardsSkeleton />}>
        <Slider />
      </Suspense>
      {maps.map((map, index) => (
        <Map key={index} url={map.url} />
      ))}
    </main>
  );
}




import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data';

import Slider from '@/app/ui/slider';

import { Skeleton } from "@nextui-org/skeleton";
import { Suspense } from 'react';
const Map = dynamic(() => import('@/app/ui/map'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Suspense fallback={Skeleton}>
        <Slider />
      </Suspense>
      {maps.map((map, index) => (
        <Map key={index} url={map.url} />
      ))}
    </main>
  );
}



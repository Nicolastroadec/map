'use client';

import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data'


const MiniMap = dynamic(() => import('@/app/ui/minimap'), { ssr: false });

export default function Slider() {

    return (
        <>
            <div className="w-full h-[200px] overflow-hidden mb-10">
                <div className="flex">
                    {maps.map((map, index) => (
                        <MiniMap key={index} url={map.url} />
                    ))}
                </div>
            </div>

        </>
    )

}
'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data'
import { CardSkeleton } from '@/app/ui/skeletons';
import { ArrowLeft, ArrowRight } from '@/app/ui/arrows';


const MiniMap = dynamic(() => import('@/app/ui/minimap'), { loading: () => <CardSkeleton />, ssr: false });

export default function Slider() {

    const [widthCard, setWidthCard] = useState(0);
    const cardWidth: number = 250;
    function handleNextClick() {
        setWidthCard(prevWidth => prevWidth + cardWidth + 20);
    }

    function handlePreviousClick() {
        setWidthCard(prewidth => {
            if (prewidth === 0) {
                return prewidth;
            }
            return prewidth - cardWidth + 20;
        })
    }

    return (
        <>
            <div className="container-slider z-20 block w-full max-w-full fixed items-center mb-10">
                <div className="relative bg-black flex">
                    <div onClick={handlePreviousClick}>
                        <ArrowLeft />
                    </div>
                    <div className="w-full h-[200px] overflow-hidden  items-center">
                        <div className=" cards flex transition-transform duration-300 items-center ease-in-out" style={{ transform: `translateX(-${widthCard}px)` }}
                        >
                            {maps.map((map, index) => (
                                <div key={index} className="card mr-[20px]">
                                    <MiniMap cardWidth={cardWidth} url={map.url} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div onClick={handleNextClick}>
                        <ArrowRight />
                    </div>
                </div>
            </div >
        </>
    )
}
'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data'
import { CardSkeleton } from '@/app/ui/skeletons';
import { ArrowLeft, ArrowRight } from '@/app/ui/arrows';


const MiniMap = dynamic(() => import('@/app/ui/minimap'), { loading: () => <CardSkeleton />, ssr: false });

export default function Slider() {

    const [widthCards, setWidthCards] = useState(0);
    const cardWidth: number = 250;
    function handleNextClick() {
        setWidthCards(prevWidth => prevWidth - (cardWidth + 20));
    }

    function handlePreviousClick() {
        setWidthCards(prewidth => {
            if (prewidth === 0) {
                return prewidth;
            }
            return prewidth + (cardWidth + 20);
        })
    }

    return (
        <>
            <div className="left-0 right-0 top-0 z-20 block fixed items-center mb-10 pt-[2rem] bg-black">
                <div className="relative bg-black flex justify-center">
                    <div className="flex items-center" onClick={handlePreviousClick}>
                        <ArrowLeft />
                    </div>
                    <div className="w-[90%] h-[200px] overflow-hidden flex items-center">
                        <div className="cards flex transition-transform duration-300 items-center ease-in-out" style={{ transform: `translateX(${widthCards}px)` }}
                        >
                            {maps.map((map, index) => (
                                <div key={index} className="card mr-[20px]">
                                    <MiniMap cardWidth={cardWidth} url={map.url} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center" onClick={handleNextClick}>
                        <ArrowRight />
                    </div>
                </div>
            </div >
        </>
    )
}
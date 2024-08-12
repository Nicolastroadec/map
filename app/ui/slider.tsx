'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data'
import { CardSkeleton } from '@/app/ui/skeletons';


const MiniMap = dynamic(() => import('@/app/ui/minimap'), { loading: () => <CardSkeleton />, ssr: false });

export default function Slider() {

    const [widthCard, setWidthCard] = useState(0);
    function handleNextClick() {
        setWidthCard(prevWidth => prevWidth + 420);
    }

    function handlePreviousClick() {
        setWidthCard(prewidth => {
            if (prewidth === 0) {
                return prewidth;
            }
            return prewidth - 420;
        })
    }

    return (
        <>
            <div className="flex relative items-center">
                <div onClick={handlePreviousClick}>
                    <svg fill="#fff" className="cursor-pointer h-[40px] w-[40px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" transform="rotate(180)">
                        <g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" /> </g>
                    </svg>
                </div>
                <div className="w-full h-[200px] overflow-hidden mb-10">
                    <div className="flex cards transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${widthCard}px)` }}
                    >
                        {maps.map((map, index) => (
                            <div key={index} className="card mr-[20px]">
                                <MiniMap url={map.url} />
                            </div>
                        ))}
                    </div>
                </div>
                <div onClick={handleNextClick}>

                    <svg fill="#fff" className="cursor-pointer h-[40px] w-[40px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
                    </svg></div>

            </div >
        </>
    )
}
'use client';
import dynamic from 'next/dynamic';
import { maps } from '@/app/lib/data'
import { CardSkeleton } from '@/app/ui/skeletons';
import { ArrowLeft, ArrowRight } from '@/app/ui/arrows';
import React, { useEffect, useRef, useState } from 'react';



const MiniMap = dynamic(() => import('@/app/ui/minimap'), { loading: () => <CardSkeleton />, ssr: false });

interface sliderProps {
    indexClicked: (index: number) => void;
}

export default function Slider({ indexClicked }: sliderProps) {
    const card = useRef<HTMLDivElement>(null);

    const [widthCards, setWidthCards] = useState(0);

    const [visibleCards, setVisibleCards] = useState(0)

    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsNumber = maps.length;

    function clickOnMap(index: number) {
        indexClicked(index);
    }

    useEffect(() => {
        const handleResize = () => {
            setWidthCards(0);
            setCurrentIndex(0);

            const windowWidth = window.innerWidth;

            const breakPoints = {
                verySmall: 480,
                small: 640,
                middle: 768,
                big: 1024,
                xl: 1280,
                xxl: 1536
            };

            if (windowWidth < breakPoints.verySmall) {
                setVisibleCards(1);
            } else if (windowWidth < breakPoints.small) {
                setVisibleCards(2);
            } else if (windowWidth < breakPoints.middle) {
                setVisibleCards(3);
            } else if (windowWidth < breakPoints.big) {
                setVisibleCards(4);
            } else if (windowWidth < breakPoints.xl) {
                setVisibleCards(5);
            } else if (windowWidth < breakPoints.xxl) {
                setVisibleCards(6);
            } else {
                setVisibleCards(7);
            }

            setCurrentIndex(visibleCards);
        };

        window.addEventListener('resize', handleResize);

        // Initial call to handle the current window size
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [visibleCards]);

    function handleNextClick() {
        if (currentIndex === cardsNumber) {
            return;
        }
        if (card.current) {
            const cardWidth = card.current.offsetWidth ? card.current.offsetWidth : 0;
            setWidthCards(prevWidth => prevWidth - (cardWidth));
            setCurrentIndex(prevIndex => prevIndex + 1)
        }
    }

    function handlePreviousClick() {
        if (currentIndex === visibleCards) {
            return;
        }

        if (card.current) {
            setCurrentIndex(prevIndex => prevIndex - 1)
            const cardWidth = card.current.offsetWidth;
            setWidthCards(prewidth => {
                if (prewidth === 0) {
                    return prewidth;
                }
                return prewidth + (cardWidth);
            })
        }
    }

    return (
        <>
            <div className="left-0 right-0 top-0 z-20 block fixed items-center mb-10 pt-[2rem] bg-[#1d2d44]">
                <div className="relative flex justify-center">
                    <div className="flex items-center" onClick={handlePreviousClick}>
                        <ArrowLeft />
                    </div>
                    <div className="w-[90%] h-[200px] overflow-hidden flex items-center">
                        <div className="cards w-[100%] flex transition-transform duration-300 items-center ease-in-out" style={{ transform: `translateX(${widthCards}px)` }}
                        >
                            {maps.map((map, index) => (
                                <div ref={card} key={index} className="card flex-grow-0 flex-shrink-0 2xl:w-[14.28%] xl:w-1/6 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 max-[480px]:w-full pl-[20px]">
                                    <MiniMap url={map.url ? map.url : ''} clickOnMap={clickOnMap} index={index} />
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
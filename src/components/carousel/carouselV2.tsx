'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface SlideProps {
    title: string;
    description: string;
    image: string;
}

const info: SlideProps[] = [
    {
        title: 'Управление клиентами и делами',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus velit ligula non neque.',
        image: 'https://dummyimage.com/1200x800/000/fff',
    },
    {
        title: 'Планирование и отслеживание задач',
        description: 'Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus ',
        image: 'https://dummyimage.com/1200x800/d95ed9/fff',
    },
    {
        title: 'Хранение и поиск документов',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus velit ligula non neque.',
        image: 'https://dummyimage.com/1200x800/5fd972/fff',
    },
    {
        title: 'Отчетность и аналитика',
        description: 'Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus velit ligula non neque.',
        image: 'https://dummyimage.com/1200x800/5fd972/fff',
    },
];

const CarouselV2: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % info.length);
                setFade(false);
            }, 800); // Duration of the fade out effect
        }, 7000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen flex w-4/5 mt-5">
            <div className={`w-1/3 p-8 flex flex-col`}>
                <h2 className={`text-2xl font-bold mb-4 duration-500 transition-opacity delay-150 ${fade ? 'opacity-0' : 'opacity-100'}`}>{info[currentSlide].title}</h2>
                <p className={`text-lg transition-opacity  duration-500 delay-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>{info[currentSlide].description}</p>
            </div>
            <div className={`relative w-2/3 flex justify-center items-center transition-opacity duration-[800ms] ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={info[currentSlide].image}
                    alt={info[currentSlide].title}
                    fill
                    className="max-h-full object-cover max-w-full"
                />
            </div>
        </div>
    );
};

export default CarouselV2;
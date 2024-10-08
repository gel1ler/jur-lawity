'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './slide'
import Slider from 'react-slick'
import { slideProps } from '../../../globalTypes';
import Image from 'next/image';

const info: slideProps[] = [
    {
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus velit ligula non neque.',
        image: 'https://dummyimage.com/600x400/000/fff',
    },
    {
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus velit ligula non neque.',
        image: 'https://dummyimage.com/600x400/d95ed9/fff',
    },
    {
        title: 'Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, urna vel mattis elementum, urna neque condimentum velit, in finibus velit ligula non neque.',
        image: 'https://dummyimage.com/600x400/5fd972/fff',
    },
]

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <Image
            src='/right-arrow.svg'
            width={100}
            height={100}
            alt='Left arrow'
            className='z-10 hover:translate-x-2 transition-transform absolute right-40 top-1/2 -translate-y-1/2 cursor-pointer'
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <Image
            src='/left-arrow.svg'
            width={100}
            height={100}
            alt='Left arrow'
            className='z-10 hover:-translate-x-2 transition-transform absolute left-40 top-1/2 -translate-y-1/2 cursor-pointer'
            onClick={onClick}
        />
    );
}

const Carousel = () => {
    const settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <Slider {...settings}>
            {info.map((item, key) => <Slide key={key} props={item} />)}
        </Slider>
    )
}

export default Carousel
import React from 'react'
import Header from './header'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full h-screen gradient'>
            <Header />
            <div className="flex justify-center items-center h-full">
                <div className="grid grid-cols-2 gap-10 -mt-40 max-w-[1280px]">
                    <div className="flex flex-col gap-6">
                        <Image
                            src='/logo.png'
                            alt='Lawity logo'
                            width={500}
                            height={200}
                            className='object-contain'
                        />
                        <p className="text-4xl text-white">CRM-система для юристов</p>
                        <p className="text-lg -mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet, distinctio accusamus et, minus sapiente totam minima blanditiis perspiciatis dicta corporis repellendus iste sint quisquam dolor? Fugiat perferendis eveniet optio!</p>
                        <button className='w-fit'>Попробуйте бесплатно</button>
                    </div>
                    <div className="relative">
                        <Image
                            src='/phone.png'
                            alt='Phone'
                            width={400}
                            height={100}
                            className='object-contain absolute right-0 translate-x-1/2 -bottom-3'
                        />
                        <Image
                            src='/imac.png'
                            alt='Imac'
                            width={600}
                            height={600}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
            <div className="arrow">
                <span></span>
            </div>
        </div>
    )
}

export default Hero
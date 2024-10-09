import React from 'react'
import { slideProps } from '../../../globalTypes'
import Image from 'next/image'

const Slide = ({ props }: { props: slideProps }) => {
    const { image, title, description } = props

    return (
        <div className='py-10 flex items-center justify-center max-w-7xl mx-auto'>
            <div className="flex flex-col xl:flex-row items-center xl:items-start  gap-10">
                <div className="flex flex-col text-center xl:w-1/2 xl:text-start">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Image
                    src={image}
                    width={600}
                    height={400}
                    alt={title}
                />
            </div>
        </div>
    )
}

export default Slide
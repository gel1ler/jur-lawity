import React from 'react'
import { slideProps } from '../../../globalTypes'
import Image from 'next/image'

const Slide = ({ props }: { props: slideProps }) => {
    const { image, title, description } = props

    return (
        <div className='min-w-[1200px] py-10 flex items-center justify-center'>
            <div className="flex w-2/3 gap-10">
                <div className="flex flex-col">
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
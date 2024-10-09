'use client'
// import Image from 'next/image'
// import React from 'react'

// const Header = () => {
//     return (
//         <header className='flex justify-between max-w-7xl w-full mx-auto p-4'>
//             <Image
//                 src='/logo.png'
//                 alt='Lawity logo'
//                 width={120}
//                 height={80}
//                 className='object-contain'
//             />
//             <nav className='flex items-center'>
//                 <ul className='flex gap-12 items-center'>
//                     <li className='underlined'><a href='#'>Возможности</a></li>
//                     <li className='underlined'><a href='#'>Тарифы</a></li>
//                     <li className='underlined'><a href='#'>Успешные кейсы</a></li>
//                     <li className='underlined'><a href='#'>Контакты</a></li>
//                 </ul>
//             </nav>

//         </header>
//     )
// }

// export default Header

import Image from 'next/image'
import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Drawer from './drawer'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='flex justify-between max-w-7xl w-full mx-auto p-4'>
            <Image
                src='/logo.png'
                alt='Lawity logo'
                width={120}
                height={80}
                className='object-contain'
            />
            <nav className='hidden md:flex items-center'>
                <ul className='flex gap-12 items-center'>
                    <li className='underlined'><a href='#'>Возможности</a></li>
                    <li className='underlined'><a href='#'>Тарифы</a></li>
                    <li className='underlined'><a href='#'>Успешные кейсы</a></li>
                    <li className='underlined'><a href='#'>Контакты</a></li>
                </ul>
            </nav>
            <Drawer />
        </header>
    )
}

export default Header
import Image from "next/image";
import React, { useState } from "react";

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <Image
                src='/icons/menu.svg'
                alt='Menu'
                width={35}
                height={35}
                onClick={toggleDrawer}
            />

            <div
                className={`transition-opacity fixed top-0 left-0 w-full h-full bg-black z-40 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleDrawer}
            />

            <div
                className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg
                transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}
                z-50
                `}
            >
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Drawer Menu</h2>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-800 hover:text-blue-500">
                            Home</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-blue-500">
                            Profile</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-blue-500">
                            Settings</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-blue-500">
                            Help</a></li>
                    </ul>
                </div>
                <Image
                    src='/icons/close.svg'
                    alt="Close"
                    width={30}
                    height={30}
                    onClick={toggleDrawer}
                    className="absolute top-4 right-4"
                />
            </div>
        </div>
    );
};

export default Drawer;  

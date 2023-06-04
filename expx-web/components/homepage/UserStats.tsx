import React, { useState } from 'react';
import { LightningBoltIcon, HomeIcon, UserIcon, CalendarIcon, DownloadIcon, ShoppingCartIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';

const UserStats = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="m-auto flex items-center space-x-2 my-2">
            <div className="flex items-center">
                <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                        <img
                            src="https://media.discordapp.net/attachments/1100745859664191558/1110881341538582619/SOLIDUS.png?width=507&height=473"
                            alt="Solidus"
                            className="w-6 h-6"
                        />
                        <span className="text-sm font-bold text-gray-700">2103</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <LightningBoltIcon className="w-5 h-5 text-yellow-500 border-none" />
                        <span className="text-sm font-bold text-gray-700">4</span>
                    </div>
                </div>
                <button className="flex items-center justify-center w-9 h-9 rounded-full ml-5" onClick={toggleDropdown}>
                    <img
                        src="https://images-ext-2.discordapp.net/external/DIFSNofJMpvwlIy8ho906dM-uDWwv8Q5BDuHvioAUmk/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1018595819416469624/058a438fcb880feccc43a2b27a6d789a.png?width=473&height=473"
                        alt="Clickable Icon"
                        className="w-9 h-9 rounded-full"
                    />
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-12 right-0 mt-1 mr-5 bg-white rounded-lg shadow-lg z-50">
                        <div className="flex flex-col space-y-2 py-1">
                            <button className="flex mr-2 ml-2 rounded-md items-center space-x-2 text-gray-500 text-sm px-4 py-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
                                <HomeIcon className="w-4 h-4" />
                                <span>Homepage</span>
                            </button>
                            <button className="flex mr-2 ml-2 rounded-md items-center space-x-2 text-gray-500 text-sm px-4 py-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
                                <UserIcon className="w-4 h-4" />
                                <span>Profile</span>
                            </button>
                            <button className="flex mr-2 ml-2 rounded-md items-center space-x-2 text-gray-500 text-sm px-4 py-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
                                <CalendarIcon className="w-4 h-4" />
                                <span>Calendar</span>
                            </button>
                            <button className="flex mr-2 ml-2 rounded-md items-center space-x-2 text-gray-500 text-sm px-4 py-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
                                <DownloadIcon className="w-4 h-4" />
                                <span>Skill Store</span>
                            </button>
                            <button className="flex mr-2 ml-2 rounded-md items-center space-x-2 text-gray-500 text-sm px-4 py-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
                                <ShoppingCartIcon className="w-4 h-4" />
                                <span>Buy Solidus</span>
                            </button>
                            <button className="flex mr-2 ml-2 rounded-md items-center space-x-2 text-red-500 text-sm px-4 py-2 hover:bg-red-100 focus:outline-none focus:bg-red-200">
                                <LogoutIcon className="w-4 h-4" />
                                <span>Log out</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserStats;

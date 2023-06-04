import React, { useState } from 'react';
import { LightningBoltIcon, HomeIcon, UserIcon, CalendarIcon, DownloadIcon, ShoppingCartIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../app/stats.css'
const UserStats = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="userstatcontainer w-full right-0 top-0">
            <div className="flex items-center flex-row gap-10 ">
                <div className="flex flex-row items-center gap-10">
                    <button className="flex items-center space-x-2">
                        <img
                            src="https://media.discordapp.net/attachments/1100745859664191558/1110881341538582619/SOLIDUS.png?width=507&height=473"
                            alt="Solidus"
                            className="w-6 h-6"
                        />
                        <span className="solidustext">2103</span>
                    </button>
                    <button className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBolt} className='h-5' style={{color: "#ffdb4c"}} />
                        <span className="streaktext">4</span>
                    </button>
                </div>
                <button className="profile" onClick={toggleDropdown}>
                    <img
                        src="https://cdn.discordapp.com/attachments/1100745859664191558/1114862411086839848/Screenshot_2023-06-04_at_6.24.12_AM.png"
                        alt="Clickable Icon"
                        className="w-full h-full rounded-full"
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

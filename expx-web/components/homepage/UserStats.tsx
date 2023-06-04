import React, { useState } from 'react';
import { LightningBoltIcon, HomeIcon, UserIcon, CalendarIcon, DownloadIcon, ShoppingCartIcon, CogIcon, LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../app/stats.css'
const UserStats = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="userstatcontainer w-full right-0 top-0">
            <div className="flex items-center flex-row gap-10 ">
                <div className="flex flex-row items-center gap-6">
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
                    <div className="dropdowncont">
                            <button className="menuitem">
                                <HomeIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Homepage</span>
                            </button>
                            <button className="menuitem">
                                <UserCircleIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Profile</span>
                            </button>
                            <button className="menuitem">
                                <CalendarIcon className="w-6 h-6 icon"/>
                                <span className='menutext'>Calendar</span>
                            </button>
                            <button className="menuitem">
                                <DownloadIcon className="w-6 h-6 icon"/>
                                <span className='menutext'>Skill Store</span>
                            </button>
                            <button className="menuitem">
                                <ShoppingCartIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Buy Solidus</span>
                            </button>
                            <button className="menuitem">
                                <CogIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Settings</span>
                            </button>
                            <button className="menuitem">
                                <LogoutIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Log out</span>
                            </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserStats;

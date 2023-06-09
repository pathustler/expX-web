
import React, { useState, useEffect } from 'react';
import { LightningBoltIcon, HomeIcon, UserIcon, CalendarIcon, DownloadIcon, ShoppingCartIcon, CogIcon, LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../static/css/stats.css'
import Link from 'next/link';
const UserStats = (props:any, activeIndex:any) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };
    const active = props.activeIndex
    
    
    //CLICK MENU FUNC

    useEffect(() => {
        initCustomScripts();
     }, [])
    
     const initCustomScripts = () => {
      document.querySelector('body')?.addEventListener('click', function(){
            
            setDropdownOpen(false)
      })
    }


    return (
        <div className="bg-white h-14p right-0 top-0 flex flex-col">
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
                            <button className={active==1?"menuitem active":"menuitem "}>
                                <HomeIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Homepage</span>
                            </button>
                            <button className={active==2?"menuitem active":"menuitem "}>
                                <UserCircleIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Profile</span>
                            </button>
                            <button className={active==3?"menuitem active":"menuitem "}>
                                <CalendarIcon className="w-6 h-6 icon"/>
                                <Link href="/calendar" className='menutext'>Calendar</Link>
                            </button>
                            <button className={active==4?"menuitem active":"menuitem "}>
                                <DownloadIcon className="w-6 h-6 icon"/>
                                <span className='menutext'>Skill Store</span>
                            </button>
                            <button className={active==5?"menuitem active":"menuitem "}>
                                <ShoppingCartIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Buy Solidus</span>
                            </button>
                            <button className={active==6?"menuitem active":"menuitem "}>
                                <CogIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Settings</span>
                            </button>
                            <button className={active==7?"menuitem active":"menuitem "}>
                                <LogoutIcon className="w-6 h-6 icon" />
                                <span className='menutext'>Log out</span>
                            </button>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default UserStats;

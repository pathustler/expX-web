"use client";
import React, { useState, useEffect } from 'react';

const ThemeMode = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const getIconUrl = () => {
        return theme === 'light'
            ? 'https://media.discordapp.net/attachments/1107643208856502392/1114466791863881748/image-removebg-preview.png'
            : 'https://media.discordapp.net/attachments/1107643208856502392/1114466925699944498/image-removebg-preview.png';
    };

    const buttonClass = theme === 'dark' ? 'icon-button w-10 h-10 bg-silver-self-300 rounded-lg border-l-black' : 'icon-button w-10 h-10 bg-gray-self-900 rounded-lg';

    return (
        <div>
            <button onClick={toggleTheme} className={buttonClass}>
                <img src={getIconUrl()} alt="Theme Icon" className="icon-image" />
            </button>
        </div>
    );
};

export default ThemeMode;

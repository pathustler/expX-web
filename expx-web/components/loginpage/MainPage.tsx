import React from 'react';
import '@/static/css/login.css';

const MainPage = () => {
    return (
        <div className="flex items-center justify-center h-full" style={{ backgroundColor: '#1B424D', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(27, 66, 77, 1), rgba(9, 96, 146, 1))' }}>
                <div className="flex items-center justify-between px-4 mt-5">
                    <div className="flex items-center">
                        <img src="https://media.discordapp.net/attachments/1100745859664191558/1100746614034927646/image-removebg-preview.png" alt="logo" style={{ height: '50px', width: 'auto' }} />
                        <p className="text-2xl text-white font-semibold">ExpX</p>
                    </div>
                </div>
                <div className="text-center h-4/5">
                    <div className="flex items-center justify-center h-full">
                        <div>
                            <h1 className="text-5xl px-96 font-bold text-white">ADD ANOTHER SKILL TO YOUR INVENTORY</h1>
                            <p className="mt-6 text-gray-400 px-96 text-2xl">Skill courses designed by experts under your fingertips. Learn anything from anywhere.</p>
                            <button className="px-6 py-2 mt-8 text-lg rounded-lg bg-white hover:bg-gray-200 active:bg-gray-300" style={{ color: '#1B424D' }}>Start now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

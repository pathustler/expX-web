import React from 'react';
import '@/static/css/login.css';

const LogIn = () => {
    return (
        <div
            className="flex items-center justify-center h-full"
            style={{
                backgroundColor: '#1B424D',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div
                className="p-4 absolute inset-0 flex items-center justify-center"
                style={{
                    background:
                        'linear-gradient(to bottom right, rgba(27, 66, 77, 1), rgba(9, 96, 146, 1))',
                }}
            >
                <div className="w-3/12 flex flex-col items-center">
                    <div className="mb-8 ">
                        <img
                            src="https://media.discordapp.net/attachments/1100745859664191558/1100746614034927646/image-removebg-preview.png"
                            alt="logo"
                            style={{ height: '50px', width: 'auto' }}
                        />
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-3xl shadow-2xl p-6 px-8 flex flex-col">
                        <h1 className="text-white text-center text-4xl mb-4 font-semibold">
                            Log In
                        </h1>
                        <p className="text-white text-sm mb-4 text-center">
                            Log in if you already have an account
                        </p>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="bg-white rounded-lg py-2 px-4 mb-2 w-full text-sm"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                className="bg-white rounded-lg py-2 px-4 w-full mt-2 text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="text-white">
                                <input type="checkbox" className="mr-1 border-white" />
                                Remember me
                            </label>
                            <p className="text-white text-sm">Sign up</p>
                        </div>
                        <button className="bg-sky-600 shadow-lg hover:bg-cyan-600 text-white rounded-lg py-2 px-4 w-full mb-4">
                            Log in
                        </button>
                        <p className="text-white text-center mb-2 text-sm">
                            Or Log-In with:
                        </p>
                        <div className="flex items-center justify-around mb-5">
                            <button className="bg-white rounded-lg p-2 mx-1">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlC73WBSUe8GOle9wMQzgvd4WqGaKaf6iFNHxJYDCA&s"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                            </button>
                            <button className="bg-white rounded-lg p-2 mx-1">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
                                    alt="Twitter"
                                    className="w-5 h-5"
                                />
                            </button>
                            <button className="bg-white rounded-lg p-2 mx-1">
                                <img
                                    src="https://icons-for-free.com/iconfiles/png/512/linkedin+logo+service+social+web+website+icon-1320192780023588708.png"
                                    alt="LinkedIn"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;

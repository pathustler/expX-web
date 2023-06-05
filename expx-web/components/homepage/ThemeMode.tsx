"use client";
import React, { useState, useEffect } from 'react';

const ThemeMode = () => {
    function toggle(){
        document.body.classList.toggle("dark")
    }

    return (
        
        <div>
        <input onChange={toggle} type="checkbox" className="checkbox" id="checkbox" />
        <label className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
        </label>
        </div>
    );
};

export default ThemeMode;

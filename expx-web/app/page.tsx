"use client";
import Sidebar from "@/components/homepage/Sidebar"
import SkillStats from "@/components/homepage/SkillStats"
import ThemeMode from "@/components/homepage/ThemeMode"
import React, { useState } from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center w-full h-screen">
        <div className="w-auto bg-white h-full border-r-2 border-color-default sidebar">
          <Sidebar />


          <div>
            <ThemeMode />
          </div>
        </div>
        <div className="w-full bg-main flex flex-column items-center overflow-y-scroll border-r-2 border-color-default h-full ">
          <div className="m-auto">
            <h1 className="text-4xl">MAIN</h1>
          </div>
        </div>
        <div className="flex flex-col w-027 gap-y-0.5 skill-info-gap bg-white  h-full">
          <div className="bg-gray-100 h-14p content-center flex flex-col text-center w-full">
            <div className="m-auto">
              <div className="m-auto">
                <h1 className="text-lg">MAIN STATS</h1>
              </div>
            </div>
          </div>
          <SkillStats skillId="13579" />
        </div>
      </div>
    </>
  )
}

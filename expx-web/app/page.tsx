"use client";
import Sidebar from "@/components/homepage/Sidebar"
import SkillStats from "@/components/homepage/SkillStats"
import UserStats from "@/components/homepage/UserStats"
import React, { useState } from 'react';
import DayActive from "@/components/homepage/dayscomponents/DayActive";
import DayGray from "@/components/homepage/dayscomponents/DayGray";
import DayNormal from "@/components/homepage/dayscomponents/DayNormal";
import DayPractice from "@/components/homepage/dayscomponents/DayPractice";
import DayRest from "@/components/homepage/dayscomponents/DayRest";
import useUser from '../lib/useUser'

export default function Home() {
  const username = "admin"
  var [userdata, setUserdata] = useState("")

  fetch('https://expx-backend.vercel.app/users/user/')
  .then(response => response.json())
  .then(data => {
    setUserdata(data[0]) 
    console.log(userdata)
  })
  .catch(error => {
    console.error('Error:', error);
  });



  return (
    <>
      <div className="flex flex-row items-center w-full h-screen">
        <div className="w-auto bg-white h-full border-r-2 border-color-default sidebar overflow-y-scroll overflow-x-hidden noscrollbar">
          <Sidebar />
        </div>
        <div className="w-full bg-main flex flex-row  overflow-y-scroll justify-center border-r-2 border-color-default h-full ">
          <div className="w-full flex flex-col pt-16 mx-auto items-center gap-8 overflow-y-scroll noscrollbar">
            <DayGray day="1" title="Learn to Create Variables with data" />
            <DayActive day="2" title="Learn to Create Variables with data" />
            <DayNormal day="3" title="Learn to Create Variables with data" />
            <DayNormal day="4" title="Learn to Create Variables with data" />
            <DayNormal day="5" title="Learn to Create Variables with data" />
            <DayNormal day="6" title="Learn to Create Variables with data" />
            <DayPractice day="6" title="Learn to Create Variables with data" />
            <DayRest day="6" title="Learn to Create Variables with data" />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.1)" className="w-20 h-20 my-9">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-rightside gap-y-0.5 skill-info-gap bg-white  h-full">
          <div>
            <UserStats data={userdata} activeIndex={1} />
          </div>
          <SkillStats skillId="13579" />
        </div>
      </div>
    </>
  )
}

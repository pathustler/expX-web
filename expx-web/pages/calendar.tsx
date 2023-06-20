import { useState } from 'react';
import CalendarComponent from '../components/calendarpage/Calendar';
import ScheduleData from '../components/calendarpage/ScheduleData';
import '../static/css/calendar.css';
import TopBar from '@/components/calendarpage/TopBar';

const CalendarPage = () => {
  const streaks = ['06-06-23', '02-06-23', '03-06-23'];
  
  return ( 
    <div className="calendarContainer">
      <div className="topbarArea">
        <TopBar/>
      </div>

      <div className="calendarArea">
          <CalendarComponent streaks={streaks} />
      </div>

      <div className="dataArea">
        <ScheduleData />
      </div>
      
    </div>
  );
};

export default CalendarPage;

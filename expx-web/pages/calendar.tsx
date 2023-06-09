import { useState } from 'react';
// import CalendarComponent from '../components/calendarpage/Calendar';
import '../static/css/calendar.css';

const CalendarPage = () => {
  const streak = ['06-06-23', '09-06-23', '10-06-23'];
  
  return ( 
    <div className="calendarContainer">
      <div className="topbarArea">Top Bar</div>
      <div className="calendarArea">
          
      </div>
      <div className="dataArea">Data</div>
    </div>
  );
};

export default CalendarPage;

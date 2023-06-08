import { useState } from 'react';
import CalendarComponent from '../components/calendarpage/Calendar';
import '../static/css/calendar.css';

const CalendarPage = () => {
  const firstArray = ['01-06-23', '02-06-23', '03-06-23'];
  const secondArray = ['06-06-23', '09-06-23', '10-06-23'];
  
  return ( 
    <div className="calendarContainer">
      <div className="topbarArea">Top Bar</div>
      <div className="calendarArea">
          <CalendarComponent firstArray={firstArray} secondArray={secondArray} />
      </div>
      <div className="dataArea">Data</div>
    </div>
  );
};

export default CalendarPage;

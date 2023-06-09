import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameMonth, isSameDay, getDate } from 'date-fns';
import '../../static/css/custom.css';
import '../../static/css/calendar.css';

interface CalendarProps {
    streaks: string[];
}

const Calendar: React.FC<CalendarProps> = ({ streaks }) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const navigateToPreviousMonth = () => {
        setCurrentDate((prevDate) => subMonths(prevDate, 1));
    };

    const navigateToNextMonth = () => {
        setCurrentDate((prevDate) => addMonths(prevDate, 1));
    };
    
    const renderCalendarHeader = () => {
        const formattedDate = format(currentDate, 'MMMM yyyy');

        return (
            <div className="flex justify-between">
                <span className="header">{formattedDate}</span>
                <div className='flex flex-row items-center gap-3'>
                    <button className='flex flex-row items-center gap-3' onClick={navigateToPreviousMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                    <button className='flex flex-row items-center gap-3' onClick={navigateToNextMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </div>
            </div>
        );
    };


    const renderCalendarCells = () => {
        const startDate = startOfWeek(startOfMonth(currentDate));
        const endDate = endOfWeek(endOfMonth(currentDate));


        const days: Date[] = [];
        const formatted_today = format(currentDate, "dd-MM-yy")
        let day = startDate;
        while (day <= endDate) {
            days.push(day);
            day = new Date(day.getTime() + 24 * 60 * 60 * 1000);
        }

        const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        return (
            <div className="calendarcells">
                <div className='flex flex-row items-center w-full justify-between'>
                    {weekdays.map((weekday) => (
                        <div key={weekday} className="buttonText font-normal daybtnclass">
                            <h1 className='btntext'>{weekday}</h1>
                        </div>
                    ))}
                </div>
                {Array(Math.ceil(days.length / 7))
                    .fill(null)
                    .map((_, rowIndex) => {
                        const weekDaysSlice = days.slice(rowIndex * 7, rowIndex * 7 + 7);
                        return (
                            <div key={rowIndex} className='flex flex-row items-center w-full justify-between'>
                                {weekDaysSlice.map((date) => {
                                    const isCurrentMonth = isSameMonth(date, currentDate);
                                    const isToday = isSameDay(date, new Date());
                                    const formattedDate = format(date, 'dd-MM-yy');

                                    let buttonClassName = '';
                                    let buttonStyle = {};

                                    if (!isCurrentMonth) {
                                        buttonClassName = 'disabled';
                                    } else if (isToday) {
                                        buttonClassName = 'second-array';
                                    } else if (streaks.includes(formattedDate) && !isToday) {
                                        {
                                            buttonClassName = 'first-array';
                                        }
                                    }

                                    return (
                                        <div key={date.getTime()}>
                                            <button
                                                className={`${!isCurrentMonth ? 'text-gray-300 border-gray-200 hover:bg-white' : 'text-black border-gray-200'
                                                    } ${buttonClassName} btnclass`}
                                                disabled={!isCurrentMonth}
                                                style={buttonStyle}
                                            >
                                                {getDate(date)}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
            </div>
        );
    };

    return (
        <div className="calendarcontainer">
            <div className="inline-block">
                {renderCalendarHeader()}
                <div>{renderCalendarCells()}</div>
            </div>
        </div>
    );
};

export default Calendar;

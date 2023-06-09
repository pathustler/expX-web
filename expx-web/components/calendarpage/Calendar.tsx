import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameMonth, isSameDay, getDate } from 'date-fns';
import '../../static/css/custom.css';
import '../../app/calendar.css';

interface CalendarProps {
    firstArray: string[];
    secondArray: string[];
}

const Calendar: React.FC<CalendarProps> = ({ firstArray, secondArray }) => {
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
                <span className="text-md font-bold">{formattedDate}</span>
                <div>
                    <button className="text-lg mr-2" onClick={navigateToPreviousMonth}>
                        {'<'}
                    </button>
                    <button className="text-lg" onClick={navigateToNextMonth}>
                        {'>'}
                    </button>
                </div>
            </div>
        );
    };

    const renderCalendarCells = () => {
        const startDate = startOfWeek(startOfMonth(currentDate));
        const endDate = endOfWeek(endOfMonth(currentDate));
        const days: Date[] = [];

        let day = startDate;
        while (day <= endDate) {
            days.push(day);
            day = new Date(day.getTime() + 24 * 60 * 60 * 1000);
        }

        const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        return (
            <table className="mx-auto">
                <thead>
                    <tr>
                        {weekdays.map((weekday) => (
                            <th key={weekday} className="buttonText font-normal">
                                {weekday}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array(Math.ceil(days.length / 7))
                        .fill(null)
                        .map((_, rowIndex) => {
                            const weekDaysSlice = days.slice(rowIndex * 7, rowIndex * 7 + 7);
                            return (
                                <tr key={rowIndex}>
                                    {weekDaysSlice.map((date) => {
                                        const isCurrentMonth = isSameMonth(date, currentDate);
                                        const isToday = isSameDay(date, new Date());
                                        const formattedDate = format(date, 'dd-MM-yy');

                                        let buttonClassName = '';
                                        let buttonStyle = {};

                                        if (!isCurrentMonth) {
                                            buttonClassName = 'disabled';
                                        } else if (isToday) {
                                            buttonClassName = 'today';
                                        } else {
                                            if (firstArray.includes(formattedDate)) {
                                                buttonClassName = 'first-array';
                                            } else if (secondArray.includes(formattedDate)) {
                                                buttonClassName = 'second-array';
                                            }
                                        }

                                        return (
                                            <td key={date.getTime()}>
                                                <button
                                                    className={`${!isCurrentMonth ? 'text-gray-300 border-gray-200 hover:bg-white' : 'text-black border-gray-200'
                                                        } ${buttonClassName} bg-white border-2 hover:bg-gray-200 rounded-xl p-2 buttonText w-10 h-10`}
                                                    disabled={!isCurrentMonth}
                                                    style={buttonStyle}
                                                >
                                                    {getDate(date)}
                                                </button>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        );
    };

    return (
        <div className="flex justify-center items-center">
            <div className="inline-block">
                {renderCalendarHeader()}
                <div>{renderCalendarCells()}</div>
            </div>
        </div>
    );
};

export default Calendar;

import React from 'react';
import '@/app/lessons.css';

const Ending = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1 className="text-4xl mb-5 font-semibold day-header">Lesson Completed</h1>
        <p className="text-3xl mb-5 font-normal day-description">Learn to create variables with data</p>
        <p className="text-lg font-bold xp">+12 XP</p>
      </div>
    </div>
  );
}

export default Ending;

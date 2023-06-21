import React, { useState, useEffect } from 'react';
import "@/app/lessons.css";
import "./lesson.css";

interface ProgressBarProps {
  percentage: number;
  result: string;
}

const BottomBar: React.FC<ProgressBarProps> = ({ result, percentage }) => {
  if (result === "1") {
    return (
      <div className={`h-full w-full bg-red-100`}>
        <div className="flex justify-center items-center h-full">
          <div className="flex justify-between items-center py-2 w-5/6">
            <p className='text-rose-700 text-lg font-bold'>Opps! Give it another shot</p>
            <button className="wrong-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  } else if (result === "2") {
    return (
      <div className={`h-full w-full bg-blue-100`}>
        <div className="flex justify-center items-center h-full">
          <div className={`flex justify-between items-center py-2 w-5/6`}>
            <div className='text-lg'><span className='font-bold text-cyan-600'>Perfect!</span> <span className='font-normal text-gray-700'>Correct Answer is:</span> <span className='font-extralight text-gray-600'>Option 1</span></div>
            <button className="next-button">
              {percentage === 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`h-full w-full bg-white`}>
        <div className="flex justify-center items-center h-full">
          <div className={`flex justify-between items-center py-2 w-5/6`}>
            <button className={percentage === 0 ? "disabled" : "back-button"}>
              Back
            </button>
            <button className="next-button">
              {percentage === 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default BottomBar;

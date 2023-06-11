import React from 'react';
import "@/app/lessons.css"
import "./lesson.css"
interface ProgressBarProps {
  percentage: number;
}
const BottomBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-between items-center bg-white py-2 w-5/6">
        <button className={percentage==0 ? "disabled" : "back-button"}>
          Back
        </button>
        <button className="next-button">
          {percentage==100 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default BottomBar;

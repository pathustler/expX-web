import React from 'react';
import "@/app/lessons.css"

const BottomBar = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-between items-center bg-white py-2 w-5/6">
        <button className="bg-gray-self rounded-xl text-black px-10 py-2 flex items-center">
          Back
        </button>
        <button className="bg-blue-self2 rounded-xl text-white px-10 py-2 flex items-center">
          Next
        </button>
      </div>
    </div>
  );
};

export default BottomBar;

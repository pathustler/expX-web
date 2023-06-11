import React from 'react';
import { XIcon } from '@heroicons/react/solid';

import "@/app/lessons.css"

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-5/6">
        <div className="flex items-center">
          <XIcon className="h-6 w-6 mr-3 text-gray-700" />
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-full bg-blue-self rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

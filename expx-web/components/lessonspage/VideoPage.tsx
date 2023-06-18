import React from 'react';

const VideoPage = () => {
  return (
    <div className="bg-gray-100 rounded-xl px-5 pt-5 w-4/6 max-h-80-percent overflow-y-auto custom-scrollbar">
      <div className="flex items-center">
        <video className="w-full rounded-lg shadow-md mb-5" controls>
          <source src="./video2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoPage;

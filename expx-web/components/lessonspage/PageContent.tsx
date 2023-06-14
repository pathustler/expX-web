import React from 'react';
import '@/app/lessons.css';

import Informative from './Informative';
import Opening from './Opening';
import Ending from './Ending';
import VideoPage from './VideoPage';

const PageContent = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-gray-100 rounded-xl px-5 pt-5 w-4/6 max-h-80-percent overflow-y-auto custom-scrollbar">
        <div>
          <p className="text-gray-700 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis euismod felis, id dapibus lectus pretium vel. Vestibulum at nisi nec lorem semper hendrerit. Proin a mi vel ipsum tempor aliquet. Suspendisse eu orci non massa lobortis tempus. Aenean condimentum mauris et tellus sagittis posuere. Maecenas eget sapien urna. Curabitur nec commodo massa. Mauris pharetra lacus ac tortor accumsan dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis euismod felis, id dapibus lectus pretium vel. Vestibulum at nisi nec lorem semper hendrerit. Proin a mi vel ipsum tempor aliquet. Suspendisse eu orci non massa lobortis tempus. Aenean condimentum mauris et tellus sagittis posuere. Maecenas eget sapien urna. Curabitur nec commodo massa. Mauris pharetra lacus ac tortor accumsan dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis euismod felis, id dapibus lectus pretium vel. Vestibulum at nisi nec lorem semper hendrerit. Proin a mi vel ipsum tempor aliquet. Suspendisse eu orci non massa lobortis tempus. Aenean condimentum mauris et tellus sagittis posuere. Maecenas eget sapien urna. Curabitur nec commodo massa. Mauris pharetra lacus ac tortor accumsan dignissim.
          </p>
        </div>
      </div>
      <VideoPage />
    </div>
  );
};

export default PageContent;

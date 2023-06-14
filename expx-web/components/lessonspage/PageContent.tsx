import React from 'react';
import '@/app/lessons.css';

import Informative from './Informative';
import Opening from './Opening';
import Ending from './Ending';
import VideoPage from './VideoPage';

const PageContent = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <VideoPage />
    </div>
  );
};

export default PageContent;

import React from 'react';
import '@/app/lessons.css';

import Informative from './Informative';
import Opening from './Opening';
import Ending from './Ending';
import VideoPage from './VideoPage';
import Redirect from './Redirect';

const PageContent = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Redirect />
    </div>
  );
};

export default PageContent;

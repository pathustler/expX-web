import React from 'react';
import '@/app/lessons.css';

import Informative from './Informative'; //Done
import Opening from './Opening'; //Done
import Ending from './Ending'; //Done
import VideoPage from './VideoPage'; //Done
import Redirect from './Redirect';

const PageContent = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Redirect />
    </div>
  );
};

export default PageContent;

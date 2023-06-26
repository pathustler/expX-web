import React from 'react';
import { useState } from 'react';
import '@/app/lessons.css';

import Informative from './Informative';
import Opening from './Opening';
import Ending from './Ending';
import VideoPage from './VideoPage';
import Question from './Question';
import Redirect from './Redirect';
import RestDay from './RestDay';
import Image from './Image';

interface Result {
  setResult: Function;
}

const PageContent: React.FC<Result> = ({ setResult }) => {
  return (
    <div className="flex items-center justify-center h-full">
      
      {/* <Informative /> */}
      {/* <Image /> */}
      <Opening />
      {/* <Ending /> */}
      {/* <VideoPage /> */}
      {/* <Redirect /> */}
      {/* <RestDay /> */}
      {/* <Question result={setResult} /> */}
    </div>
  );
};

export default PageContent;

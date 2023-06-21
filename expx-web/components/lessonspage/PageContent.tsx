import React from 'react';
import {useState } from 'react';
import '@/app/lessons.css';

import Informative from './Informative';
import Opening from './Opening';
import Ending from './Ending';
import VideoPage from './VideoPage';
import Question from './Question';
import Redirect from './Redirect';
import RestDay from './RestDay';

interface Result {
  setResult: Function;
}

const PageContent: React.FC<Result> = ({ setResult }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <VideoPage />
      {/* <Question result={setResult} /> */}
    </div>
  );
};

export default PageContent;

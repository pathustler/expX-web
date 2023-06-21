import React from 'react'
import { useState } from 'react'
import "@/app/lessons.css"

import ProgressBar from '@/components/lessonspage/ProgressBar'
import PageContent from '@/components/lessonspage/PageContent'
import BottomBar from '@/components/lessonspage/BottomBar'

const lessons = () => {
  const percentage=30
  const [ result, setResult ] = useState(" ");

  return (
    <div className="lessonsContainer">
      <div className="progressbar"><ProgressBar percentage={percentage} /></div>
      <div className="pagecontent"><PageContent setResult={setResult} /></div>
      <div className="bottombar"><BottomBar result={result} percentage={percentage} /></div>
    </div>
  )
}

export default lessons
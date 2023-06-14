import React from 'react'
import "@/app/lessons.css"

import ProgressBar from '@/components/lessonspage/ProgressBar'
import PageContent from '@/components/lessonspage/PageContent'
import BottomBar from '@/components/lessonspage/BottomBar'
import Redirect from '@/components/lessonspage/Redirect'


const lessons = () => {
  const percentage=30
  return (
    <div className="lessonsContainer">
      <div className="progressbar"><ProgressBar percentage={percentage} /></div>
      <div className="pagecontent"><Redirect /></div>
      <div className="bottombar"><BottomBar percentage={percentage} /></div>
    </div>
  )
}

export default lessons
import React from 'react'
import "@/app/lessons.css"

import ProgressBar from '@/components/lessonspage/ProgressBar'
import PageContent from '@/components/lessonspage/PageContent'
import BottomBar from '@/components/lessonspage/BottomBar'

const lessons = () => {
  return (
    <div className="lessonsContainer">
      <div className="progressbar"><ProgressBar percentage={10} /></div>
      <div className="pagecontent"><PageContent /></div>
      <div className="bottombar"><BottomBar /></div>
    </div>
  )
}

export default lessons
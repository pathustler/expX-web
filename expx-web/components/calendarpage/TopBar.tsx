import '../../static/css/calendar.css';
import UserStats from '../homepage/UserStats';
import { useRouter } from 'next/router'

export default function TopBar(){
    const router = useRouter()
    return (
        <>
        
            <div className='topcalcontainer h-full'>
                <button onClick={() => router.back()}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="rgba(0, 0, 0, 0.7)" className="w-5 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
                </button>
           

                    <div>
                        <h1 className='toptitle'>Calendar</h1>
                    </div>
                
            </div>
        </>
    )
}
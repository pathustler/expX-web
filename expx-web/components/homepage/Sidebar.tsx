import Logo from '../../public/images/logo.svg'
import { CalendarIcon } from '@heroicons/react/outline';

export default function Sidebar() {
    var thumbnails:string[] = [
        'https://static.vecteezy.com/system/resources/previews/006/945/737/non_2x/simple-karate-logo-vector.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',

    ]
    return (
        <>
            <div className="topsidebar">
                <div className="topbar">
                    <div className="flex flex-row items-center logo">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                        fill="#1e475d" stroke="none">
                        <path d="M2755 3869 c-140 -14 -310 -65 -442 -133 -230 -116 -440 -326 -560
                        -562 -255 -497 -161 -1095 235 -1490 228 -229 497 -349 845 -378 l57 -5 0 118
                        0 118 -77 6 c-254 21 -487 131 -665 313 -131 134 -206 266 -263 459 -33 111
                        -45 311 -25 432 55 346 282 649 593 793 111 52 306 97 430 100 4 0 7 54 7 120
                        l0 120 -27 -1 c-16 -1 -64 -5 -108 -10z"/>
                        <path d="M2781 3359 c-296 -45 -542 -263 -632 -559 -19 -61 -23 -99 -24 -205
                        0 -76 6 -153 13 -185 21 -86 105 -248 165 -321 128 -154 328 -259 524 -276
                        l73 -6 0 392 0 391 389 0 390 0 -6 58 c-26 295 -213 551 -483 662 -37 15 -90
                        33 -117 38 -76 17 -221 22 -292 11z"/>
                        <path d="M1106 2503 c20 -308 101 -577 248 -826 301 -510 841 -841 1429 -876
                        l107 -6 0 122 0 123 -62 0 c-219 1 -512 89 -728 218 -167 101 -345 263 -457
                        417 -174 240 -293 567 -293 812 0 107 5 103 -131 103 l-119 0 6 -87z"/>
                        </g>
                        </svg>
                    </div>
                </div>
                <div className='bottombar'>
                    {
                        thumbnails.map((item, index) => (
                            <div className='skill-container' key={index}>
                                <img style={{width:"3.12rem", height:"3.12rem"}}src={item}></img>
                            </div>
                        ))
                    }
                    <div className='calendar-item'>
                        <CalendarIcon className="calendar-icon" />
                    </div>
                    <div className='search-item'>

                    </div>
                </div>
            </div>
           
        </>
    )
}

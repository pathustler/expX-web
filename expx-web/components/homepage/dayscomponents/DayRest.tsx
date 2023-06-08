export default function DayRest(day:any, title:any){
    const type = day
    return(
        
        <>
            <div className="daycontainer resthover">
                <div className="leftdaycont">
                    <h1 className={"day restday"}>Day 2 - Rest</h1>
                    <h2 className="daytitle resttitle sm:hidden md:hidden lg:block xl:block 2xl:block">Learn to Create Variables with data </h2>
                </div>
                <div className="rightdaycont">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#4E95BD" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                </div>
            </div>
        </>
    )
}
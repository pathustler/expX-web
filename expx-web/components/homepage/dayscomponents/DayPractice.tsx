export default function DayPractice(day:any, title:any){
    const type = day
    return(
        
        <>
            <div className="daycontainer practicehover">
                <div className="leftdaycont">
                    <h1 className={"day activeday"}>Day 7</h1>
                    <h2 className="daytitle activetitle sm:hidden md:hidden lg:block xl:block 2xl:block">Learn to Create Variables with data </h2>
                </div>
                <div className="rightdaycont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.3)"  className="w-6 h-6">
                <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>

                <h3 className="duration activeduration">22 m</h3>
                </div>
            </div>
        </>
    )
}
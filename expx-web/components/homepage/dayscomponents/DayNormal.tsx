export default function DayNormal(day:any, title:any){
    const type = day
    return(
        
        <>
            <div className="daycontainer normalhover">
                <div className="leftdaycont">
                    <h1 className="day normalday">Day 3</h1>
                    <h2 className="daytitle normaltitle sm:hidden md:hidden lg:block xl:block 2xl:block">Learn to Create Variables with data </h2>
                </div>
                <div className="rightdaycont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.3)" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
                
                <h3 className="duration normalduration">22m</h3>
                </div>
            </div>
        </>
    )
}
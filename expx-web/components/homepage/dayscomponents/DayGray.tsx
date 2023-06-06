export default function DayGray(day:any, title:any){
    const type = day
    return(
        
        <>
            <div className="daycontainer" style={{backgroundColor: "#E8E8E8",border: "2px solid #E8E8E8"}}>
                <div className="leftdaycont">
                    <h1 className={"day grayday"}>Day 1</h1>
                    <h2 className="daytitle graytitle sm:hidden md:hidden lg:block">Learn to Create Variables with data </h2>
                </div>
                <div className="rightdaycont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#afb0b0" className="w-7 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
                <h3 className="duration grayduration">22m</h3>
                </div>
            </div>
        </>
    )
}
import { useState } from "react";
import "./sidebar.css"

interface Items {
    itemsarray: any;
    activeitem:number
}
const SidebarDef: React.FC<Items> = ({itemsarray, activeitem=0}) => {

    const [active, setActive] = useState(activeitem)
    return (
        <>
        <div className="sidebardefmain">
  <div className="logocontainer">
    <div className="logo-1">
      <svg
        className="group"
        width="32"
        height="39"
        viewBox="0 0 32 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6106 0.79833C18.9026 0.96913 16.8286 1.59133 15.2182 2.42093C12.4122 3.83613 9.8502 6.39813 8.3862 9.27733C5.2752 15.3407 6.422 22.6363 11.2532 27.4553C14.0348 30.2491 17.3166 31.7131 21.5622 32.0669L22.2576 32.1279V30.6883V29.2487L21.3182 29.1755C18.2194 28.9193 15.3768 27.5773 13.2052 25.3569C11.607 23.7221 10.692 22.1117 9.9966 19.7571C9.594 18.4029 9.4476 15.9629 9.6916 14.4867C10.3626 10.2655 13.132 6.56893 16.9262 4.81213C18.2804 4.17773 20.6594 3.62873 22.1722 3.59213C22.221 3.59213 22.2576 2.93333 22.2576 2.12813V0.66413L21.9282 0.67633C21.733 0.68853 21.1474 0.73733 20.6106 0.79833Z"
          fill="#1E465C"
        />
        <path
          d="M20.928 7.02019C17.3168 7.56919 14.3156 10.2288 13.2176 13.84C12.9858 14.5842 12.937 15.0478 12.9248 16.341C12.9248 17.2682 12.998 18.2076 13.0834 18.598C13.3396 19.6472 14.3644 21.6236 15.0964 22.5142C16.658 24.393 19.098 25.674 21.4892 25.8814L22.3798 25.9546V21.1722V16.402H27.1256H31.8836L31.8104 15.6944C31.4932 12.0954 29.2118 8.97219 25.9178 7.61799C25.4664 7.43499 24.8198 7.21539 24.4904 7.15439C23.5632 6.94699 21.7942 6.88599 20.928 7.02019Z"
          fill="#1E465C"
        />
        <path
          d="M0.493122 17.4634C0.737122 21.221 1.72532 24.5028 3.51872 27.5406C7.19092 33.7626 13.7789 37.8008 20.9525 38.2278L22.2579 38.301V36.8126V35.312H21.5015C18.8297 35.2998 15.2551 34.2262 12.6199 32.6524C10.5825 31.4202 8.41092 29.4438 7.04452 27.565C4.92172 24.637 3.46992 20.6476 3.46992 17.6586C3.46992 16.3532 3.53092 16.402 1.87172 16.402H0.419922L0.493122 17.4634Z"
          fill="#1E465C"
        />
      </svg>
    </div>

    <div className="exp-x">
      <span>
        <span className="exp-x-span">Exp</span>
        <span className="exp-x-span2">X</span>
        </span>
    </div>
  </div>

  <div className="itemwrapper">
    {
        itemsarray.map((item:any, index:any) => (
            <button id={index} onClick={()=>{setActive(index)}} className={index==active? "item-active" : "item"}>
                <svg className="vector" width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={item[2]!="Fill" ? "none" : index==active ?"#01adff": "#7F7F7F"}
                    xmlns="http://www.w3.org/2000/svg"
                    stroke={index==active?"#01adff": "#7F7F7F"}
                    >
                    {item[1]}    
                </svg>
                

                <div className={index==active? "active-item" : "menu-item-text"}>{item[0]}</div>
            </button>
        ))
    }
  </div>
</div>
        </>
    )
}

export default SidebarDef
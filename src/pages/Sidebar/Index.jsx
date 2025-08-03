import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaChartLine, FaUser } from "react-icons/fa"
import { IoBag } from "react-icons/io5"
import { MdClose, MdDashboard } from "react-icons/md"
import { NavLink } from "react-router"

const siderbarItem=[
  {
    name:"Dashboard",
    icon:<MdDashboard/>,
    link:"/"
  },
  {
    name:"Profile",
    icon:<FaUser/>,
    link:"/profile"
  },
  {
    name:"Order",
    icon:<AiOutlineShoppingCart/>,
    link:"/order"
  },
  {
    name:"Product",
    icon:<IoBag/>,
    link:"/product"
  },
  {
    name:"Sales Report",
    icon:<FaChartLine/>,
    link:"/sales"
  },
]
const Sidebar = ({toggleSidebar}) => {
  const [isActive,setisActive]=useState(0);
  return (
    <div className='bg-primary1 border-r border-primary2 text-white h-screen p-5 w-44 transition-all'>
      <ul className="space-y-3 mt-5 md:mt-0">
        {siderbarItem.map((item,idx)=>{
          return (
            <NavLink key={item.name} to={item.link} onClick={()=>setisActive(idx)} className={`flex font-medium px-2 py-2.5 rounded-lg items-center gap-2 cursor-pointer hover:bg-secoundary hover:text-primary1 transition-all duration-200 ${idx===isActive?"bg-secoundary text-black":"text-grayText"}`}>
              {item.icon}{item.name}

            </NavLink>
          )
        })}
      </ul>
      <button onClick={toggleSidebar} className="md:hidden absolute top-0 right-0 px-2 py-3 text-2xl cursor-pointer">
        <MdClose/>
      </button>

    </div>
  )
}

export default Sidebar
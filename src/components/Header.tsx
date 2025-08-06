import { useState } from "react"
const Logo = '{This_Is_Kev}'
const Menu = [
    'Home',
    'About',
    'Projects',
    'Blog',
    'Contact',    
]

const Header = () =>{
    const [menuOpen, menuStatus] =useState(false)
    return(
        <>
        <div className=" bg-transparent backdrop-blur-md p-5 top-0 sticky z-50">
        <div className="max-w-7xl mx-auto justify-between items-center flex">
            <h2 className="cursor-pointer text-2xl md:text-3xl">{Logo}</h2>
            {/* desktop view */}
            <ul className="hidden md:flex">
                {Menu.map((list,index) => (
                    <a href="#" key={index} className="ml-5 flex">{list}</a>
                ))}
            </ul>
            
            <div className="md:hidden">
            <button onClick={() => menuStatus(!menuOpen)}>{menuOpen ? '⏏︎':'↓'}</button>
            </div>
            </div>
            {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 h-[50vh]">
          <ul className="grid ">
                {Menu.map((list,index) => (
                    <a href="#" key={index} className="block hover:text-sky-400 hover:bg-gray-800 px-5 py-5 rounded-r-2xl">{list}</a>
                ))}
            </ul>
        </div>)}

            
        </div>
        </>
    )

}
export default Header
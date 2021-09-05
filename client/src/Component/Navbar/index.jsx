import react from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";



const MobileNav = () => {
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <div className="w-28 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                     alt ="logo"
                     className="w-full h-full"
                
                />
            </div>

            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                    Use App
                </button>
                <span className="border p-2 border-gray-500 text-zomato-300 rounded-full">
                    <FaUserAlt/>
                    
                </span>
            </div>
    </div>
    );
};

const LargeNav = () => {
    return <>
    <div className="hidden lg:inline container px-20 mx-auto">
    <div className="hidden w-full items-center justify-between  gap-4 lg:flex gap-2">
             <div className="w-23 h-7">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                     alt ="logo"
                     className="w-full h-full"
                
                />
            </div>

            <div className="w-3/4 flex w-full bg-white shadow-md p-3 border border-gray-200 rounded gap-3">
                <div className="flex items-center gap-2 border-r-2  border-gray-300 pr-2">
                    <span className="text-zomato-300">
                        <HiLocationMarker/>
                        
                    </span>
                    <input type="text" 
                            placeholder="Bengluru"
                            className="focus:outline-none"/>
                    <IoMdArrowDropdown/>
                </div>
                <div className="flex w-full items-center gap-2">
                    
                    <RiSearchLine/>
                    <input type="text"  
                           placeholder="Search for restaurant, cuisine or dish"
                           className="w-full focus:outline-none" />
                    
                </div>
            </div>

            <div className="ml-28 flex gap-8">
                <button className="text-gray-400 text-xl hover:text-gray-800">Login</button>
                <button className="text-gray-400 text-xl hover:text-gray-800">signUp</button>
            </div>
    </div>
    </div>
    </>;
};




const Navbar = () => {
    return(
        <>
        <nav className="p-4 flex items-center bg-white shadow-md lg:shadow-none">
            
                <MobileNav/>
                <LargeNav/>
           
            
        </nav>
        </>
    )

}; 

export default Navbar;
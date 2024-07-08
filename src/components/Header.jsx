import { CiSearch,CiUser } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
    const [open,setOpen] = useState(false)
    const cartItemNumber = useSelector((state) => state.watch.cartItem)
  return (
    <div className="flex justify-between items-center py-8 px-auto w-[80vw]">
        <div className="flex items-center justify-evenly gap-4">
            <Link to="/" className="text-gray-900 font-bold text-xl">
            Doclan <span className="text-[coral]">Co.</span>
            </Link>
            <ul className="lg:flex hidden items-center gap-[20px] text-gray-700 text-sm">
                <li className="font-semibold text-gray-800">
                    Products
                </li>
                <li>
                    Contacts
                </li>
                <li>
                    Membership
                </li>
                <li>
                    Help
                </li>
            </ul>
        </div>
        <div className="flex items-center gap-[20px]">
            <div className="border border-gray-400 rounded sm:flex hidden items-center justify-between  px-2">
                <input type="text" className="border-none  outline-none "/>
                <button><CiSearch /></button>
            </div>
          <div className="hidden md:flex items-center justify-center gap-2 ">
          Create account
          <CiUser />
          </div>
          
            <div className="relative">
                <Link to='/cart'>
                 <BiShoppingBag className="text-xl cursor-pointer"/>
                 <span className="absolute bg-[coral] h-5 rounded-full w-5 flex items-center justify-center bottom-0 -translate-y-6 right-0">{cartItemNumber.length}</span>
                </Link>
            </div>
            <div className="flex lg:hidden"
            onClick={() => setOpen(true)}>
            <CiMenuBurger className="text-lg font-bold cursor-pointer" />
            </div>
            {open && (
             <div className="flex lg:hidden absolute items-center transition-all z-[999] duration-100 delay-100 justify-center bg-gray-200 w-[200px] h-[50vh] top-0 right-0">
             <span className="absolute top-0 cursor-pointer right-0 mt-8 mr-4" onClick={() => setOpen(false)}>
             <FaTimes />
             </span>
             <ul className="flex flex-col  items-center gap-[20px] text-gray-700 text-sm">
                <li className="font-semibold text-gray-800">
                    Products
                </li>
                <li>
                    Contacts
                </li>
                <li>
                    Membership
                </li>
                <li>
                    Help
                </li>
                <li className="flex md:hidden bg-white py-1 px-2 rounded items-center gap-2 text-sm">
                Create account
            </li>
            </ul>
             </div>
            )}
           
        </div>
    </div>
  )
}

export default Header
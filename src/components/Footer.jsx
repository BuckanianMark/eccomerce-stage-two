import {Link} from 'react-router-dom'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <div className='flex items-start  justify-between mx-2 w-[80vw] gap-4 flex-wrap mt-2 py-2'>
        <div className='flex flex-col items-start'>
        <Link to="/" className="text-gray-900 font-bold text-xl">
            Doclan <span className="text-[coral]">Co.</span>
            </Link>
            <p className='text-sm tracking-wide sm:flex hidden'>
            Discover timeless elegance at Doclan Co. Shop <br />
            our curated collection of carefully crafted men&apos;s <br />
            watches and elevate your stature effortlessly
            </p>
        </div>
        <div className=' '>
            <h1 className='font-semibold text-black'>Useful Links</h1>
            <ul className='flex flex-col items-start text-sm justify-start gap-3'>
                <li>Products</li>
                <li>Contacts</li>
                <li>Memebership</li>
                <li>Help</li>
            </ul>
        </div>
        <div className=' '>
            <h1 className='font-semibold text-black'>My Account</h1>
            <ul className='flex flex-col items-start justify-start text-sm gap-3'>
                <li>My Order</li>
                <li>My Previous Order</li>
                <li>My Personal Info</li>
            </ul>
        </div>
        <div className=' '>
            <h1 className='font-semibold text-black'>Socials</h1>
            <ul className='flex flex-col items-start justify-start text-sm gap-3'>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
            </ul>
        </div>
    </div>
    <div className='flex items-center py-2 justify-between my-3 border-t border-gray-400'>
        <p>Copyright @ 2024 All rights reserved DoClan Co.</p>
        <span className='flex items-center gap-6 text-2xl'>
        <FaCcVisa />
        <FaCcMastercard />
        </span>
    </div>
    </div>
  )
}

export default Footer
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex items-start  justify-between mx-2 w-[80vw] gap-4 flex-wrap mt-2 py-2'>
        <div className='flex flex-col items-start w-1/3 min-w-[200px]'>
        <Link to="/" className="text-gray-900 font-bold text-xl">
            Doclan <span className="text-[coral]">Co.</span>
            </Link>
            <p className='text-sm tracking-wide'>
            Discover timeless elegance at Doclan Co. Shop <br />
            our curated collection of carefully crafted men&apos;s <br />
            watches and elevate your stature effortlessly
            </p>
        </div>
        <div className=' w-1/3  min-w-[100px]'>
            <h1 className='font-semibold text-black'>Useful Links</h1>
            <ul className='flex flex-col items-start text-sm justify-start gap-3'>
                <li>Products</li>
                <li>Contacts</li>
                <li>Memebership</li>
                <li>Help</li>
            </ul>
        </div>
        <div className=' w-1/3 min-w-[100px]'>
            <h1 className='font-semibold text-black'>My Account</h1>
            <ul className='flex flex-col items-start justify-start text-sm gap-3'>
                <li>My Order</li>
                <li>My Previous Order</li>
                <li>My Personal Info</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
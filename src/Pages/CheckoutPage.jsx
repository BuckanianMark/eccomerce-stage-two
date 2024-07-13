import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
const CheckoutPage = () => {
   
    const watchCartItem = useSelector((state) => state.watch.cartItem );
    const totalPrice = watchCartItem.reduce((acc,curr) => acc + parseInt(curr.total),0)
    const tax = 612
    const total = totalPrice + tax
    return (
    <div className="w-[80vw] h-[100%] mb-2">
        <Link to="/cart" className="flex items-center gap-3">
        <FaArrowLeft />
        Back to Cart</Link>
        
        <div className="flex items-start lg:flex-row flex-col  gap-[10px] mt-5">
            
            <div className="lg:w-1/2 w-[100%] px-4  bg-[whitesmoke]">
            {/* {watchCartItem.length > 0 && */}
            {watchCartItem.map((item) => (
                <div key={item.id} className="flex bg-[whitesmoke] border-b sm:flex-row flex-col mx-2 mb-2 py-2 px-2 justify-between items-center max-w-[600px]">
                    <div>
                        <img src={item.picture} alt={item.title} width={100} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-black">{item.title}</span>
                        <span>Qty: {item.qty}</span>
                    </div>
                    <div className="font-semibold">
                        Price:
                        KES{item.price}
                    </div>
                    </div>
          ))}
        {/* } */}
        <div className="w-[100%] max-w-[600px] border-max mx-2  py-3 px-4">
            <h1 className="font-bold text-black">Order Summary</h1>
            <div className="w-[100%] flex items-center justify-between">
                Subtotal <span className="font-bold">${totalPrice}</span>
            </div>
            <div  className="w-[100%] flex items-center justify-between">
                Tax <span className="font-bold"> ${tax}</span> 

            </div>
            <div className="w-[100%] flex items-center justify-between">
                Deivery <span className="font-bold"> $0</span> 
            </div>
            <div className=" flex gap-2">
            <input type="text" className="outline-none border py-1 px-3 rounded" placeholder="Memebership Number" />
            <button>APPLY</button>
            </div>
            <div className="w-[100%] flex items-center justify-between">Total <span className="font-bold">${total}</span></div>
        </div>
            </div>
            <div className="bg-[white] lg:w-1/2 w-[100%]">
            <h1 className="font-bold">Delivery Details</h1>
            <div className="max-w-[400px]">
                <div className="flex flex-col items-start gap-2">
                <label >Email</label>
                <input type="text" className="border w-[100%] text-gray-400 py-1 px-2 outline-none rounded border-gray-300" defaultValue="hnginternship@hng.com" />
                </div>
                <div className="flex gap-4 mt-2">
                    <div className="flex flex-col items-start gap-2">
                        <label>First Name</label>
                        <input 
                        type="text"
                        className="border w-[100%] text-gray-400 py-1 px-2 outline-none rounded border-gray-300"
                         defaultValue="HNG 11" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label>Last Name</label>
                        <input 
                        type="text" 
                        defaultValue="Internship" 
                        className="border w-[100%] text-gray-400 py-1 px-2 outline-none rounded border-gray-300"/>
                    </div>
                </div>
                <div  className="flex flex-col items-start gap-2">
                <label >Street Address</label>
                <input 
                type="text"
                 className="border w-[100%] text-gray-400 py-1 px-2 outline-none rounded border-gray-300"
                 defaultValue="Our Slack Channel" />
                </div>
                <div className="flex gap-4 mt-2 flex-wrap">
                    <div className="flex flex-col items-start gap-2 max-w-[150px]">
                        <label>LGA</label>
                        <input 
                        type="text" 
                         className="border  text-gray-400 py-1 px-2 outline-none rounded border-gray-300"
                        defaultValue="Our Slack Channel" />
                    </div>
                    <div className="flex flex-col ml-10 items-start gap-2 max-w-[150px]">
                        <label>City</label>
                        <input 
                        type="text"
                        className="border  text-gray-400 py-1 px-2 outline-none rounded border-gray-300" 
                        defaultValue="Our Slack Channel" />
                    </div>
                    <div className="flex flex-col items-start gap-2 max-w-[150px]">
                        <label>State</label>
                        <input 
                        type="text"
                        className="border  text-gray-400 py-1 px-2 outline-none rounded border-gray-300" 
                        defaultValue="Our Slack Channel" />
                    </div>
                </div>
               <div className="mt-4">
                <h1 className="font-bold">Payment Details</h1>
                <div className="flex flex-col items-start gap-2" >
                <label >Card Number</label>
                <div className="border flex justify-between items-center w-[100%] rounded px-4 py-2">
                <input type="text" defaultValue="1111-222222-333333-444444" className="outline-none" />
                <FaCcMastercard />
                </div>
                </div>
                <div className="flex gap-4 sm:flex-row flex-col mt-2 mb-4">
                <div  className="flex flex-col  items-start gap-2">
                <label >Expiry Date</label>
                <input 
                type="text" 
                className="border  text-gray-400 py-1 px-2 outline-none rounded border-gray-300" 
                defaultValue="09/29" />

                </div>
                <div className="flex flex-col items-start gap-2">
                <label >CVV</label>
                <input 
                type="text" 
                className="border  text-gray-400 py-1 px-2 outline-none rounded border-gray-300" 
                defaultValue="555" />

                </div>
                </div>
               </div>
            </div>
            <button className="bg-black text-white  w-[80%] py-2 rounded-full">Make Payment</button>
            <p className="text-center w-[100%] text-sm mt-5">By Clicking the button, you agree to our <span className="text-blue-900"> Terms & Conditions of Service</span></p>
            </div>
        </div> 
    </div>
  )
}

export default CheckoutPage
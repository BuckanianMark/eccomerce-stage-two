/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteCartItem, increaseQuantity } from "../redux/cartSlice";
const CartItem = ({id,title,picture,price,color,size,qty}) => {
    const dispatch = useDispatch();
  return (
    <div className="flex bg-[whitesmoke] py-2 px-2 mb-2 items-start justify-between height-[200px]" >
        <div className=" w-[120px]">
            <img src={picture} alt="image"  />
        </div>
        <div>
            <div className="flex flex-col">  
                <div className="flex items-start justify-around">      
        <div className="flex flex-col items-start justify-start">
            <h1 className="font-bold text-black">{title}</h1>
           <p className="font-[600] ">Color: <span className="font-[300]"> {color} </span></p>
            <p className="font-[600]"><span className="font-[300]">Size: {size} </span></p>
        </div>
        <div className="flex flex-col justify-between items-center gap-10">
            <span className="font-extrabold text-black">
                ${price}
            </span>
            <div className="bg-[white] border py-3 px-4 border-gray-100 rounded-full flex items-center justify-center gap-8">
            <button onClick={() => dispatch(decreaseQuantity(id))}><FaMinus className="cursor-pointer" /></button>     
                {qty}
            <button onClick={() => dispatch(increaseQuantity(id))}><FaPlus className="cursor-pointer" /></button>

            </div>
            </div>  
            </div> 
            <div className="float-right gap-2 flex items-center mt-4 justify-between  flex-wrap w-[100%] g">
                <button 
                onClick={() => dispatch(deleteCartItem(id))}
                className="mr-3 bg-white py-1 px-2 rounded-full">Remove</button>
                <span className="mr-3 bg-white py-1 px-2 rounded-full">Save For Later</span>
                <span className="mr-3 bg-white py-1 px-2 rounded-full">Share</span>
                <span className="mr-3 bg-white py-1 px-2 rounded-full">Compare with similar brands</span>
            </div>
        </div>
        </div>
    </div> 
  )
}

export default CartItem
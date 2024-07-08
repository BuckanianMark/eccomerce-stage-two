import { BiShoppingBag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
// eslint-disable-next-line react/prop-types
const ProductCard = ({id,picture,title,price,color,size}) => {
  const dispatch = useDispatch();
  const handleAddCartItem = () => {
    dispatch(addCartItem({
      id:id,
      title:title,
      price:price,
      picture:picture,
      color:color,
      size:size
    }))
  }
  return (
    <div className="md:w-[317px] h-[384px] w-[200px]   rounded-[8px] relative object-fit bg-[whitesmoke]">
        <div className="h-[80%] overflow-hidden">
        <img src={picture} alt="" className="w-[100%] object-fill "/>
        </div>
        <div className="border-t border-gray-300 mt-2  mx-3 ">
        <h2 className="font-bold text-black">{title}</h2>
       <p>${price}</p>
       <span 
       onClick={handleAddCartItem}
       className="absolute bottom-0 right-0 cursor-pointer mr-2 mb-2 bg-gray-200 rounded w-10 h-10 flex items-center justify-center">
       <BiShoppingBag />
       </span>
        </div>
        
    </div>
  )
}

export default ProductCard